import React from 'react';
import TaskCardHeader from './TaskCardHeader';
import TaskCardBody from './TaskCardBody';
import TaskCardOption from './TaskCardOption';
import YOpen from '../../transition/YOpen';

const TaskCard = ({ task, editTask, deleteTask }) => {
  return (
    <YOpen className="row bg-white my-3">
      <div className="col">
        <TaskCardHeader
          id={task.id}
          title={task.title}
          important={task.important}
          finished={task.finished}
          editTask={editTask}
        />
        <div className="row px-1">
          <TaskCardBody
            id={task.id}
            detail={task.detail}
            finished={task.finished}
            editTask={editTask}
          />
          <TaskCardOption id={task.id} deleteTask={deleteTask} />
        </div>
      </div>
    </YOpen>
  );
};
export default TaskCard;
