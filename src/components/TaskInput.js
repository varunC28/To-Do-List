import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState(''); // State to store the input value

  // Handle input value change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
