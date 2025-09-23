import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      <button
        onClick={() => {
          const text = prompt("Nova tarefa:");
          if (text) dispatch(addTodo(text));
        }}
      >
        Adicionar Tarefa
      </button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
