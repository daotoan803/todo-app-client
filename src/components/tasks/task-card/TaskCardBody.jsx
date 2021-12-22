import React, { useState } from 'react';
import LoadingIcons from './../../icons/LoadingIcons';

const TaskCardBody = ({ id, detail, finished, editTask }) => {
  const [loading, setLoading] = useState(false);

  const setTaskUnfinished = async () => {
    setLoading(true);
    await editTask(id, { finished: false });
    setLoading(false);
  };

  const setTaskFinished = async () => {
    setLoading(true);
    await editTask(id, { finished: true });
    setLoading(false);
  };

  return (
    <>
      <div className="col-1 d-flex align-items-center justify-content-center">
        {!finished && !loading && (
          <i
            className="far fa-square fa-2x"
            style={{ color: 'gray', cursor: 'pointer' }}
            onClick={setTaskFinished}
          />
        )}
        {finished && !loading && (
          <i
            className="far fa-check-square fa-2x"
            style={{ color: '#0d6efd', cursor: 'pointer' }}
            onClick={setTaskUnfinished}
          />
        )}

        {loading && <LoadingIcons />}
      </div>
      <div className="col-10">
        <p>{detail}</p>
      </div>
    </>
  );
};

export default TaskCardBody;