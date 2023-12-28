// TodoList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, toggleTask } from '../redux/actions';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
