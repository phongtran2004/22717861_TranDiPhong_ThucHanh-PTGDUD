import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { TodoProvider, useTodoContext } from './TodoContext';
import './App.css';
import axios from 'axios';

const FetchDataComponent = ({ setData }) => {
  // State to store API data, loading state, and error state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API using useEffect
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')  // Replace with your API endpoint
      .then((response) => {
        setData(response.data);  // Store fetched data in parent component's state
        setLoading(false);  // Set loading to false after fetching data
      })
      .catch((error) => {
        setError(error);  // Handle errors
        setLoading(false);  // Set loading to false after an error
      });
  }, [setData]);  // Empty dependency array means this runs only once after the initial render

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error.message}</div>;
  }

  return null;  // Nothing to render in this component as we handle rendering elsewhere
};

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef(null);
  const { state, dispatch } = useTodoContext();
  
  // State for storing the fetched API data
  const [apiData, setApiData] = useState([]);

  // useEffect to automatically focus the input when a new todo is added
  useEffect(() => {
    inputRef.current.focus();
  }, [state.todos]);

  // useMemo to calculate the completed todos
  const completedTodos = useMemo(() => {
    return state.todos.filter(todo => todo.completed);
  }, [state.todos]);

  // useCallback to remember the function for adding a new todo
  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      const newTodoItem = { id: Date.now(), text: newTodo, completed: false };
      dispatch({ type: 'ADD_TODO', payload: newTodoItem });
      setNewTodo('');
    }
  }, [newTodo, dispatch]);

  // Function to handle deleting a todo
  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  // Function to toggle a todo's completion status
  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <div className="App">
      <h1>Todo List with Hooks</h1>

      {/* Input to add a new todo */}
      <input
        ref={inputRef}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <h2>All Todos</h2>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Completed Todos</h2>
      <ul>
        {completedTodos.length > 0 ? (
          completedTodos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))
        ) : (
          <li>No completed todos</li>
        )}
      </ul>

      <h2>API Data (Users)</h2>
      {apiData.length > 0 ? (
        <ul>
          {apiData.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      ) : (
        <div>No data available</div>
      )}

      {/* Fetch data component */}
      <FetchDataComponent setData={setApiData} />
    </div>
  );
};

// Wrap the app in TodoProvider to share state across the app
const AppWrapper = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

export default AppWrapper;
