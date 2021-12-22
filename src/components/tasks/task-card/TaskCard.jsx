import React from 'react';
import TaskCardHeader from './TaskCardHeader';
import TaskCardBody from './TaskCardBody';
import TaskCardOption from './TaskCardOption';
import styled, { keyframes } from 'styled-components';

const TaskCard = ({ task, editTask, deleteTask }) => {
  return (
    <FadeIn className="row bg-white my-3">
      <div className="col">
        <TaskCardHeader
          id={task.id}
          title={task.title}
          important={task.important}
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
    </FadeIn>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0,
    transform: scale(0.8);
  }
  to{
    opacity: 1
    transform: scale(1); 
  }
`;

const FadeIn = styled.li`
  animation: ${fadeIn} 3s ease-in-out infinite;
`;

export default TaskCard;
