import React from 'react';
import TaskList from './TaskList';

const TaskListContainer = ({
  tasks,
  deleteTask,
  editTask,
  title,
  placeholder,
  className='',
  style={},
}) => {
  return (
    <section
      className={
        'container border rounded-5 bg-dark p-0 pb-2 ' + className
      } style={style}>
      <p className="h3 text-white bg-primary p-2">{title}</p>
      {tasks.length !== 0 ? (
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      ) : (
        <p className="h5 text-white text-center">{placeholder}</p>
      )}
    </section>
  );
};

export default TaskListContainer;
