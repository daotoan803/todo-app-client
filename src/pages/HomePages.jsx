import React, { useState, useEffect } from 'react';
import task from './../apis/Task';

const HomePages = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await task.getAllTasks();
      console.log('getting tasks');
      setTaskList(data);
    })();
  }, []);

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
};

export default HomePages;
