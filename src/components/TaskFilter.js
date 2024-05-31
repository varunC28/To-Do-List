import React from 'react';

const TaskFilter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filter : </label>
      <select id="filter" value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default TaskFilter;
