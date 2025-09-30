import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'

//  import AppComponents from './exemplo1-componentes/AppComponents'
// import AppHook from './exemplo2-useHook/AppHook'
import AppPrivate from './exemplo3-rotaProtegida/AppPrivate'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AppComponents /> */}
      {/* <AppHook /> */}
      <AppPrivate />
    </BrowserRouter>
  </React.StrictMode>
)
