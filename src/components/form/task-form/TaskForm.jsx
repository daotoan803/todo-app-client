import React, { useState } from 'react';
import LabelInput from './../LabelInput';
import LabelTextarea from './../LabelTextarea';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const isTaskAdded = await addTask({ title, detail });
    if (isTaskAdded) {
      setTitle('');
      setDetail('');
    }
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDetailChange = (e) => {
    setDetail(e.target.value);
  };


  return (
    <form className="text-white row" onSubmit={onSubmit}>
      <div className="mb-3">
        <LabelInput
          label="Title"
          type="text"
          required={true}
          value={title}
          onChange={onTitleChange}
          placeholder="Task title"
        />
      </div>
      <div className="mb-3">
        <LabelTextarea
          label="Detail"
          type="text"
          required={true}
          value={detail}
          onChange={onDetailChange}
          placeholder="Task details"
        />
      </div>
      <div className="row">
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Add task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
