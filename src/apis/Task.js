import authentication from './Authentication';

const task = (() => {
  const getAllTasks = async () => {
    const response = await authentication.sendAuthenticatedRequest(
      '/api/tasks',
      'GET'
    );
    const data = await response.json();
    console.log('data');
    console.table(data);
    return data;
  };

  return { getAllTasks };
})();

export default task;
