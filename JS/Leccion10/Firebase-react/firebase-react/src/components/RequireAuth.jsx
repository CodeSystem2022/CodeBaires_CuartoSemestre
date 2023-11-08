import PropTypes from "prop-types";
import { useContext } from "react"; // Importa la función "useContext" de la biblioteca React para acceder a un contexto.
import { UserContext } from "../context/UserProvider"; // Importa el contexto "UserContext" desde el archivo "UserProvider.js".
import { Navigate } from "react-router-dom"; // Importa el componente "Navigate" de React Router para la navegación.

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext); // Utiliza "useContext" para acceder al contexto "UserContext" y obtener el estado del usuario.

  if (!user) {
    // Verifica si el usuario no está autenticado.
    return <Navigate to="/login" />; // Si el usuario no está autenticado, redirige a la página de inicio de sesión ("/login") utilizando el componente "Navigate".
  }

  return children; // Si el usuario está autenticado, renderiza los componentes hijos pasados como "children".
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired // Valida que se pase 'children' como prop
};

export default RequireAuth; // Exporta el componente "RequireAuth" como el componente principal del módulo.