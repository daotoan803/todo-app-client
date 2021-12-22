import React, { useState } from 'react';
import TaskCardHeader from './TaskCardHeader';
import TaskCardBody from './TaskCardBody';
import TaskCardOption from './TaskCardOption';
import YOpen from '../../transition/YOpen';

const TaskCard = ({ task, editTask, deleteTask }) => {
  const [editing, setEditing] = useState(false);
  const [titleEdit, setTitleEdit] = useState(task.title);
  const [detailEdit, setDetailEdit] = useState(task.detail);

  const saveEdit = async () => {
    await editTask(task.id, { title: titleEdit, detail: detailEdit });
    setEditing(false);
  };

  return (
    <YOpen className="row bg-white my-3">
      <div className="col">
        <TaskCardHeader
          id={task.id}
          title={task.title}
          important={task.important}
          finished={task.finished}
          editTask={editTask}
          editing={editing}
          titleEdit={titleEdit}
          setTitleEdit={setTitleEdit}
          saveEdit={saveEdit}
        />
        <div className="row px-1">
          <TaskCardBody
            id={task.id}
            detail={task.detail}
            finished={task.finished}
            editTask={editTask}
            editing={editing}
            detailEdit={detailEdit}
            setDetailEdit={setDetailEdit}
          />
          <TaskCardOption
            id={task.id}
            deleteTask={deleteTask}
            toggleEditing={() => setEditing(!editing)}
          />
        </div>
      </div>
    </YOpen>
  );
};
export default TaskCard;
