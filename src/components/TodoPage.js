// TodoPage.js
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoStyles.css'; 

const TodoPage = () => {
  return (
    <div>
      <h1>Todo List App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoPage;
