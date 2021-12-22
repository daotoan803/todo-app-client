import React, { useState, useEffect } from 'react';
import taskApi from './../apis/Task';
import TaskForm from './../components/form/task-form/TaskForm';
import TaskListContainer from '../components/tasks/TaskListContainer';
import YOpen from './../components/transition/YOpen';
import styled from 'styled-components';

const HomePages = ({ showSuccessMessage, showDangerMessage }) => {
  const [taskList, setTaskList] = useState([]);
  const [openTaskForm, setOpenTaskForm] = useState(false);
  const [showFinishedTask, setShowFinishedTask] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await taskApi.getAllTasks();
      setTaskList(data.reverse());
    })();
  }, []);

  const editTask = async (id, { title, detail, finished, important }) => {
    const isChanged = await taskApi.updateTask(id, {
      title,
      detail,
      finished,
      important,
    });
    if (isChanged) {
      const tempTaskList = taskList.slice();
      tempTaskList.forEach((task) => {
        if (task.id === id) {
          task.title = title?.trim() ? task : task.title;
          task.detail = detail?.trim() ? detail : task.detail;
          task.finished = finished ?? task.finished;
          task.important = important ?? task.important;
        }
      });
      setTaskList(tempTaskList);
      return;
    }
    alert('Something went wrong');
  };

  const deleteTask = async (id) => {
    const isDeleteSuccess = await taskApi.deleteTask(id);
    if (isDeleteSuccess) {
      const tempTaskList = taskList.filter((task) => task.id !== id);
      setTaskList(tempTaskList);
      showDangerMessage('Task deleted !');
      return;
    }
    alert('Something went wrong ');
  };

  const addTask = async (newTask) => {
    const task = await taskApi.addTask(newTask);
    if (task) {
      setTaskList((prev) => [task, ...prev]);
      showSuccessMessage('New tasks added !');
      return true;
    }

    alert('Something went wrong ');
    return false;
  };

  const openAddTaskForm = () => {
    setOpenTaskForm((prev) => !prev);
  };

  const importantTasks = [];
  const normalTasks = [];
  const finishedTask = [];
  taskList.forEach((task) => {
    if (task.important && !task.finished) importantTasks.push(task);
    else if (!task.finished) normalTasks.push(task);
    else finishedTask.push(task);
  });

  return (
    <>
      <button
        className="btn btn-primary rounded-0 mt-4"
        onClick={openAddTaskForm}>
        {openTaskForm ? 'Cancel' : 'Add task'}
      </button>
      {/* {openTaskForm && (
      )} */}
      <YOpen inProp={openTaskForm}>
        <div className="container bg-dark mt-0 p-4">
          <TaskForm addTask={addTask} />
        </div>
      </YOpen>
      <TaskListContainer
        tasks={importantTasks}
        editTask={editTask}
        deleteTask={deleteTask}
        title="Important task"
        placeholder="You don't have any important tasks!"
        className="mt-4"
      />

      <button
        className="btn btn-primary mt-3 mb-0"
        onClick={() => {
          setShowFinishedTask((prev) => !prev);
        }}>
        {!showFinishedTask ? 'Show finished tasks' : 'Show tasks'}
      </button>

      <YOpen inProp={!showFinishedTask}>
        <TaskListContainer
          tasks={normalTasks}
          editTask={editTask}
          deleteTask={deleteTask}
          title="Other tasks"
          placeholder="You don't have any tasks here!"
          className="mt-0"
        />
      </YOpen>

      <YOpen inProp={showFinishedTask}>
        <div className="position-relative">
          <GrayOut />
          <TaskListContainer
            tasks={finishedTask}
            editTask={editTask}
            deleteTask={deleteTask}
            title="Finished tasks"
            placeholder="You haven't finished any tasks yet!"
            className="mt-0"
          />
        </div>
      </YOpen>
    </>
  );
};

export default HomePages;

const GrayOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(206, 206, 206, 0.5);
`;
