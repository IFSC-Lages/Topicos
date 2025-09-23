// Exemplo 2: Todo List com Redux puro - App sem React - Resolução atividade 1 - Redux Puro

/*
Objetivo:
Simular um gerenciador de tarefas usando Redux puro,
sem interface gráfica (apenas console.log).

Cenários onde isso é útil:
1. Scripts de automação em Node.js (ex.: controlar tarefas em fila).
2. Treinar o conceito de actions/reducers sem precisar de UI.
3. Monitoramento via logs (cada ação muda o "estado global").
*/

import { createStore } from "redux";

// Reducer para gerenciar uma lista de tarefas
function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE_TODO":
      return state.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );
    case "REMOVE_TODO":
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

// Criar store
const store = createStore(todoReducer);

// Subscribing → toda mudança de estado será mostrada
store.subscribe(() => console.log("Estado atual:", store.getState()));

// Dispatch → testando ações
store.dispatch({ type: "ADD_TODO", payload: "Estudar Redux" });
store.dispatch({ type: "ADD_TODO", payload: "Fazer exercícios" });
store.dispatch({ type: "TOGGLE_TODO", payload: store.getState()[0].id });
store.dispatch({ type: "REMOVE_TODO", payload: store.getState()[1].id });


/*

//Saída esperada no console:

Estado atual: [ { id: 1, text: 'Estudar Redux', done: false } ]
Estado atual: [ 
  { id: 1, text: 'Estudar Redux', done: false },
  { id: 2, text: 'Fazer exercícios', done: false }
]
Estado atual: [ 
  { id: 1, text: 'Estudar Redux', done: true },
  { id: 2, text: 'Fazer exercícios', done: false }
]
Estado atual: [ { id: 1, text: 'Estudar Redux', done: true } ]

*/