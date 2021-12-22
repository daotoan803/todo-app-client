import React, { useState } from 'react';
import LoadingIcons from '../../icons/LoadingIcons';

const TaskCardHeader = ({ id, title, important, editTask }) => {
  const [loading, setLoading] = useState(false);
  const setTaskImportant = async () => {
    setLoading(true);
    await editTask(id, { important: true });
    setLoading(false);
  };
  const setTaskNotImportant = async () => {
    setLoading(true);
    await editTask(id, { important: false });
    setLoading(false);
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
        <p className="h4 m-0 d-inline text-white mx-1">{title}</p>
      </div>
      <p className="col-4 d-flex justify-content-end align-items-center text-white h5 m-0">
        TODAY
      </p>
    </div>
  );
};

export default TaskCardHeader;
