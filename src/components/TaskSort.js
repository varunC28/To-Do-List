import React from 'react';

const TaskSort = ({ sortOrder, onSortOrderChange }) => {
  return (
    <div>
      <label htmlFor="sort">Sort : </label>
      <select id="sort" value={sortOrder} onChange={(e) => onSortOrderChange(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default TaskSort;
