import PropTypes from "prop-types"; // Esta importacion es para validar las propiedades

import { auth } from "../firebase"; // Importa la instancia de autenticación de Firebase.
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
  } from "firebase/auth";
import { createContext, 
     useEffect,
     useState } from "react"; // Importa las funciones "createContext" y "useState" de la biblioteca React.

export const UserContext = createContext(); // Crea un contexto de usuario llamado "UserContext".

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false); // Utiliza "useState" para definir el estado del usuario con un valor inicial de "false".

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
          // este metodo esta pendiente si el usuario esta logueado o no
          console.log(user);
          if (user) {
            const { email, photoURL, displayName, uid } = user;
            setUser({ email, photoURL, displayName, uid }); // con esto si existe un usuario le pasamos esos datos
          } else {
            setUser(null)
          }
        });
        return () => unsuscribe(); // Cancela la suscripción cuando el componente se desmonta
      }, []); // nos va a traer al usuario que esta activo en el backend, Se ejecuta solo una vez al inicio para obtener el usuario actual

    const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password); // con este metodo registramos al usuario

    const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password); // con este metodo logueamos al usuario

    const signOutUser = () => signOut(auth); // con este metodo cerramos sesion al usuario

    return (
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser, signOutUser }}>
            {children} {/*Envuelve los componentes hijos con el contexto "UserContext.Provider" y proporciona el valor del estado del usuario y la función para establecerlo.*/}
        </UserContext.Provider>
    );
};

// Agrega la validación de props
UserProvider.propTypes = {
    children: PropTypes.node.isRequired // Valida que se pase 'children' como prop
  };
  

export default UserProvider; 