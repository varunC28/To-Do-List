import React, { useState, useEffect } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskSort from './components/TaskSort';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  // State variables
  const [tasks, setTasks] = useState([]); // List of tasks
  const [filter, setFilter] = useState('all'); // Filter for tasks (all/completed/pending)
  const [sortOrder, setSortOrder] = useState('asc'); // Sort order for tasks (asc/desc)
  const [theme, setTheme] = useState('light'); // Theme (light/dark)

  // Load saved tasks and theme from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    const savedTheme = localStorage.getItem('theme');
    if (savedTasks) {
      setTasks(savedTasks);
    }
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Apply theme to document body and save it to localStorage whenever it changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  // Function to remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to toggle the completion status of a task by index
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Function to change the task filter
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to change the sort order
  const handleSortOrderChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => (
    filter === 'all' ||
    (filter === 'completed' && task.completed) ||
    (filter === 'pending' && !task.completed)
  ));

  // Sort tasks based on the selected sort order
  const sortedTasks = filteredTasks.sort((a, b) => (
    sortOrder === 'asc' 
      ? a.text.localeCompare(b.text) 
      : b.text.localeCompare(a.text)
  ));

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <TaskInput addTask={addTask} />
      <div className="filter-sort-container">
        <TaskFilter filter={filter} onFilterChange={handleFilterChange} />
        <TaskSort sortOrder={sortOrder} onSortOrderChange={handleSortOrderChange} />
      </div>
      <TaskList 
        tasks={sortedTasks} 
        onToggleCompletion={toggleTaskCompletion} 
        onRemoveTask={removeTask} 
      />
    </div>
  );
};

export default App;
