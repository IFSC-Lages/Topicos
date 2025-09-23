
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    const text = prompt("Nova tarefa:");
    if (text) dispatch({ type: 'ADD_TODO', payload: text });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

      <h2>Todo List</h2>
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
