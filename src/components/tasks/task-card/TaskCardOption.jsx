import React, { useState } from 'react';
import LoadingIcons from '../../icons/LoadingIcons';

const TaskCardOption = ({ id, deleteTask }) => {
  const [deleting, setDeleting] = useState(false);
  const onDeleteClick = async () => {
    setDeleting(true);
    await deleteTask(id);
  };

  return (
    <div className="col-1 d-flex flex-column align-items-center">
      <button className="btn btn-success my-1">
        <i className="fas fa-edit" />
      </button>
      {!deleting && (
        <button className="btn btn-danger my-1" onClick={onDeleteClick}>
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      )}
      {deleting && <LoadingIcons />}
    </div>
  );
};

export default TaskCardOption;
