// src/reducers.js

const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
        };
      case 'REMOVE_TASK':
        return {
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case 'TOGGLE_COMPLETE':
        return {
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  