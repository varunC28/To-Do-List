import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleCompletion, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          onToggle={onToggleCompletion} 
          onRemove={onRemoveTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
