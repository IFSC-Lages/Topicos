import { StrictMode } from "react";
import "./mocks/server";
import "./mocks/serverEx";
import { createRoot } from "react-dom/client";
import AppEstadosEMunicipioMock from "./components/statesmock/AppEstadosEMunicipiosMock";
//import { CallBackApp } from "./components/callback/Callback";
//import { HideApp } from "./components/hide/Hide";
// import { TodoApp } from "./components/todo/Todo";
//import { TypographyApp } from "./components/typography/TypographyMain";
// import AppEstadosEMunicipios from "./components/states/AppEstadosEMunicipios";

createRoot(document.getElementById("root")!).render(
  <StrictMode>  
    {/* <CallBackApp /> */}
    {/* <HideApp/> */}
    {/* <TodoApp /> */}
    {/* <TypographyApp/> */}
    {/* <AppEstadosEMunicipios/> */}
    <AppEstadosEMunicipioMock/> 
  </StrictMode>
);
