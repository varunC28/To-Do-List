import React from 'react';

const TaskItem = ({ task, index, onToggle, onRemove }) => {
  // Handle task toggle
  const handleToggle = () => {
    onToggle(index);
  };

  // Handle task removal
  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={handleToggle}
      >
        {task.text}
      </span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
