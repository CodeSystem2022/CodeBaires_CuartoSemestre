import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import { useContext } from "react";

import Login from "./routes/Login";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Perfil from "./routes/Perfil";
import NotFound from "./routes/NotFound";   
import Inicio from "./routes/Inicio"; 

import LayoutContainerForm from "./components/layouts/LayoutContainerForm";
import LayoutRequireAuth from "./components/layouts/LayoutRequireAuth";
import Navbar from "./components/Navbar";




const App = () => {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar /> {/* Utiliza el componente Navbar aquí */}
      <Routes>
        <Route index element={<Inicio />} />

        <Route path="/" element={<LayoutRequireAuth />}>
          <Route path="Home" element={<Home />} /> {/*agregue el home*/}
          {/* <Route index element={<Home />} cambio el inicio a inicio y no a home */}
          <Route path="perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          {/* Definición de otra ruta */}
          <Route path="/login" element={<Login />} />
          {/* Define la ruta "/login" y renderiza el componente "Login" cuando la ruta coincide.*/}
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </>
  );
};

export default App;