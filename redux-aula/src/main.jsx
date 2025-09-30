import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// Exemplo 2 - Counter e Todo com React e Redux Clássico
// import AppEx2 from '../exemplos/exemplo2-counter-todo-react-redux/AppEx2.jsx'
// import {store} from "../exemplos/exemplo2-counter-todo-react-redux/store.js"; 

// Exemplo 2.1 - Counter com React e Redux Clássico
// import AppEx21 from '../exemplos/exemplo2.1-counter-react-redux/AppEx2-1.jsx'
// import {store} from "../exemplos/exemplo2.1-counter-react-redux/store.js"; 

// Exemplo 2.2 - Todo com React e Redux Clássico (Resolução atividade 2 - Redux Clássico)
// import AppEx22 from '../exemplos/exemplo2.2-todo-react-redux/AppEx2-2.jsx'
// import {store} from "../exemplos/exemplo2.2-todo-react-redux/store.js"; 

// Exemplo 3 - Counter e Todo com com React e Redux ToolKit
//import AppEx3 from "../exemplos/exemplo3-counter-todo-redux-toolkit/AppEx3.jsx";
//import { store } from "../exemplos/exemplo3-counter-todo-redux-toolkit/store"; 

// Exemplo 3.1 - Counter e Todo com com React e Redux ToolKit
//import AppEx31 from "../exemplos/exemplo3.1-counter-redux-toolkit/AppEx3-1.jsx";
//import { store } from "../exemplos/exemplo3.1-counter-redux-toolkit/store"; 

// Exemplo 3.2 - Todo com com React e Redux ToolKit (Resolução atividade 3 - Redux ToolKit)
import AppEx32 from "../exemplos/exemplo3.2-todo-redux-toolkit/AppEx3-2.jsx";
import { store } from "../exemplos/exemplo3.2-todo-redux-toolkit/store"; 

// Exemplo 4 - Consumo de API com React e Redux Thunk - (Resolução atividade 4  - Redux ToolKit)
//import AppEx4 from '../exemplos/exemplo4-todo-async-api/AppEx4.jsx'
//import {store} from "../exemplos/exemplo4-todo-async-api/store";

// Exemplo 4.1 - Consumo de API com React e Redux Thunk
// import AppEx41 from '../exemplos/exemplo4.1-movies-async-api/AppEx4-1.jsx'
// import {store} from "../exemplos/exemplo4.1-movies-async-api/store"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <AppEx2 /> */}
      {/* <AppEx21 /> */}
      {/* <AppEx22 /> */}
      <AppEx32 />
    </Provider>
  </StrictMode>
);
