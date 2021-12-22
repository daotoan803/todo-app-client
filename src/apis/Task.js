import authentication from './Authentication';

const taskApi = (() => {
  const getAllTasks = async () => {
    const response = await authentication.sendAuthenticatedRequest(
      '/api/tasks',
      'GET'
    );
    const data = await response.json();
    return data;
  };

  const updateTask = async (
    id,
    {
      title = null,
      detail = null,
      finished = null,
      important = null,
    }
  ) => {
    const response = await authentication.sendAuthenticatedRequest(
      '/api/tasks',
      'PATCH',
      {
        id,
        title,
        detail,
        finished,
        important,
      }
    );
    if (response.status === 200) {
      return true;
    }
    const { error } = await response.json();
    console.log(error);
    return false;
  };

  const deleteTask = async (id) => {
    const response = await authentication.sendAuthenticatedRequest(
      '/api/tasks',
      'DELETE',
      { id }
    );
    if (response.status === 200) return true;
    return false;
  };

  const addTask = async (newTask) => {
    const response = await authentication.sendAuthenticatedRequest(
      '/api/tasks',
      'POST',
      newTask
    );
    const task = await response.json();
    if (response.status === 200) return task;
    return null;
  };

  return { getAllTasks, updateTask, deleteTask, addTask };
})();

export default taskApi;
