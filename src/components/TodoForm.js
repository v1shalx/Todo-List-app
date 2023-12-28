// TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './TodoStyles.css'; 

const TodoForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={taskText}
        onChange={handleInputChange}
        placeholder="Enter your task..."
        style={{ borderRadius: '5px 0 0 5px', border: '2px solid #3498db' }}
      />
      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};


export default TodoForm;
