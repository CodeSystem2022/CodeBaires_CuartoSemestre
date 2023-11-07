import { useContext } from "react"; 
import {NavLink} from "react-router-dom";
import {UserContext} from "../context/UserProvider";

const Navbar = () => {
    const {user, signOutUser} = useContext(UserContext);

    const handleClickLogOut = async () => {
        try {
            await signOutUser();
            console.log("Usuario deslogueado");
        } catch (error) {
            console.log(error.code);
        }
   }

    return(
        <div>
            {user ? (
                <div>
                    <NavLink to="/">Inicio</NavLink>
                    <button onClick={handleClickLogOut}>Cerrar Sesión</button>
                </div>
            ) : (
                <div>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Registro</NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;