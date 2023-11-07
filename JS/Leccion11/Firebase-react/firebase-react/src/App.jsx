import {Routes, Route} from "react-router-dom"; //Importa los componentes necesarios de React Router para definir rutas en la aplicación

import Login from "./routes/Login"; // Importa el componente "Login" desde el archivo "Login.jsx"
import Home from "./routes/Home"; // Importa el componente "Home" desde el archivo "Home.jsx"
import Register from "./routes/Register";
import Navbar from "./components/Navbar"; // Importa el componente "Navbar" desde el archivo "Navbar.js"
import RequireAuth from "./components/RequireAuth"; // Importa el componente "RequireAuth" desde el archivo "RequireAuth.js"

function App() {
  return (
    <>
      <Navbar /> {/*Renderiza el componente "Navbar", que probablemente representa la barra de navegación de la aplicación. */}
      <h1>APP</h1> {/*Rederiza un título o encabezado en la página */}
      <Routes> {/*Define un conjunto de rutas utilizando el componente "Routes" de React Router. */}
        {" "}
        {/* Definición de una ruta */}
        <Route
          path="/"
          element={
            <RequireAuth>
              {" "}
              <Home /> {" "}
            </RequireAuth>
        }
        />
        {/* Definición de otra ruta */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App
