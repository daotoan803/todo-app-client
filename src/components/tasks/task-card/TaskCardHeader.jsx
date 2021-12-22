import React, { useState } from 'react';
import LoadingIcons from '../../icons/LoadingIcons';

const TaskCardHeader = ({
  id,
  title,
  important,
  editTask,
  finished,
  editing,
  titleEdit,
  setTitleEdit,
  saveEdit,
}) => {
  const [loading, setLoading] = useState(false);

  const setTaskImportant = async () => {
    setLoading(true);
    await editTask(id, { important: true });
    if (finished) setLoading(false);
  };
  const setTaskNotImportant = async () => {
    setLoading(true);
    await editTask(id, { important: false });
    if (finished) setLoading(false);
  };

  return (
    <div className="row mb-1 py-2 bg-primary">
      <div className="col-8 d-flex align-items-center">
        {!important && !loading && (
          <i
            className="far fa-star fa-2x"
            style={{ color: 'yellow', cursor: 'pointer' }}
            onClick={setTaskImportant}
          />
        )}
        {important && !loading && (
          <i
            className="fas fa-star fa-2x"
            style={{ color: 'yellow', cursor: 'pointer' }}
            onClick={setTaskNotImportant}
          />
        )}
        {loading && <LoadingIcons />}
        {!editing && <p className="h4 m-0 d-inline text-white mx-1">{title}</p>}
        {editing && (
          <input
            className="form-control"
            type="text"
            value={titleEdit}
            onChange={(e) => setTitleEdit(e.target.value)}
          />
        )}
      </div>
      {editing && (
        <div className="col d-flex justify-content-end" onClick={saveEdit}>
          <button className="btn btn-success">Save</button>
        </div>
      )}
    </div>
  );
};

export default TaskCardHeader;
