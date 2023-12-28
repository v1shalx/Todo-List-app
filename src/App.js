// src/App.js

import React from 'react';
import TodoList from './components/TodoForm'; // Adjust the path

function App() {
  return (
    <div className="app-container">
      <h1>Redux Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
