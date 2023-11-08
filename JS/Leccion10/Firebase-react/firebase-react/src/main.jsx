//import React from "react"; // Importa la biblioteca React para trabajar con componentes de React.
import ReactDOM from "react-dom/client"; // Importa la biblioteca ReactDOM para renderizar componentes en el DOM.
import "./index.css"; // Importa una hoja de estilo CSS llamada "index.css".
import App from "./App"; // Importa el componente principal de la aplicación desde el archivo "App.js".

import { BrowserRouter } from "react-router-dom"; // Importa el componente "BrowserRouter" de React Router, que permite la navegación en la aplicación.
import UserProvider from "./context/UserProvider"; // Importa un componente personalizado "UserProvider" de un contexto definido en el proyecto.

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>
);
// Utiliza ReactDOM.render para renderizar la aplicación en el elemento con el ID "root" en el DOM.

// Aquí se configura el enrutador principal y el proveedor de usuario antes de renderizar la aplicación principal.