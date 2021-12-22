import React from 'react';
import TaskCard from './task-card/TaskCard';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <>
      <ul className="px-4">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
