import React, { createContext, useContext, useReducer } from 'react';

// Khởi tạo trạng thái ban đầu
const initialState = {
  todos: [],
};

// Định nghĩa action types
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Reducer để quản lý state
const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

// Tạo context
const TodoContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Hook để sử dụng context
export const useTodoContext = () => useContext(TodoContext);
