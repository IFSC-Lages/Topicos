
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addTodo } from './store';

function App() {
  const count = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h2>Todo List</h2>
      <button onClick={() => {
        const text = prompt("Nova tarefa:");
        if (text) dispatch(addTodo(text));
      }}>Adicionar Tarefa</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
