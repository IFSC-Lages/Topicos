import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addMovie } from "./store";

function App() {
  const API_KEY = import.meta.env.VITE_APP_API_KEY || "api_key";
  const { items, status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=tt3896198&t=${title}`;
    const res = await fetch(url);
    if (!res.ok) {
      const resp = await res.json();
      throw new Error(
        `Erro HTTP ${res.status}: ${res.statusText || "Erro ao conectar"} - ${
          resp.Error
        }`
      );
    }
    const data = await res.json();
    dispatch(addMovie(data));
  };

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
          const text = prompt("Nome filme:");
          if (text) getMovie(text);
        }}
      >
        Adicionar Filme
      </button>
      <ul>
        {items.map((t) => (
          <div
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid black",
            }}
            key={t.imdbID}
          >
            <li key={t.Title}>{t.Title}</li>
            <li key={t.Year}>{t.Year}</li>
            <li key={t.Runtime}>{t.Runtime}</li>
            <li key={t.Genre}>{t.Genre}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
