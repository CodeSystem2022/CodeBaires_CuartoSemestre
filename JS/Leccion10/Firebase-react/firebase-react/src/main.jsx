// Importa la biblioteca React y la función createRoute  de react-dom
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {createRoot} from 'react-dom/client';

// Importa la hoja de estilo CSS llamada "index.css"
import "./index.css";

//Importa el componente principal de la aplicación desde el archivo "App.js"
import App from "./App";

// Importa el componente "BrowserRouter" de React Router, que permite la navegación en la aplicación.
import {BrowserRouter} from "react-router-dom";

// Importa un componente personalizado "UserProvider" que proporciona el contexto de usuario.
import UserProvider from "./context/UserProvider";

//Obtiene una referencia al elemento con el ID "root" en el DOM
const root = document.getElementById("root");

//Crea una instancia de createRoot para renderizar la aplicación en el elemento "root"
const rootElement = createRoot(root);

//Renderiza la aplicación en el elemento "root"
rootElement.render(
  <BrowserRouter> 
    {/* Envuelve la aplicación con el componente UserProvider para proporcionar información de usuario */}
    <UserProvider>
      {/*Dentro del BrowserRouter, define el componente principal de la aplicación*/}
      <App/>
    </UserProvider>
  </BrowserRouter>
);