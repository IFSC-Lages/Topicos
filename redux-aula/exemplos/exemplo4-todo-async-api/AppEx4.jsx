import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo } from "./store";

function App() {
  const { items, status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const getStatus = () => {
    if (status === "loading") return <p>Carregando...</p>;
    if (status === "failed")
      return (
        <div>
          <p>Erro ao carregar!</p>
          <p>{error}</p>
        </div>
      );
    return null;
  };

  return (
    <div>
      <h2>Todo List (com API)</h2>
      {getStatus()}
      <button
        onClick={() => {
          const text = prompt("Nova tarefa:");
          if (text) dispatch(addTodo({ id: Date.now(), title: text }));
        }}
      >
        Adicionar Tarefa
      </button>
      <ul>
        {items.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
