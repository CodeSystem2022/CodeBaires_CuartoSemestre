import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

// Componente Navbar
const Navbar = () => {
    // Obtiene el contexto del usuario
    const { user, signOutUser } = useContext(UserContext);

    // Controlador de evento para cerrar sesión
    const handleClickLogout = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.log(error.code);
        }
    };

    // Clases CSS reutilizables para los botones
    const classButtonBlue =
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800";

    const classButtonRed =
        "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <img
                    src="src\assets\img\UTN San Rafael.png"
                    className="h-10 mr-3"
                    alt="UTN FRSR"
                />
                <Link to="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Documentación de Ingreso UTN San Rafael
                    </span>
                </Link>
                <div className="flex md:order-2">
                    {user ? (
                        // Si el usuario está autenticado
                        <>
                            <NavLink to="/Home" className={classButtonBlue}>
                                Inicio
                            </NavLink>
                            <button
                                onClick={handleClickLogout}
                                className={classButtonRed}
                            >
                                Cerrar sesión
                            </button>
                        </>
                    ) : (
                        // Si el usuario no está autenticado
                        <>
                            <NavLink to="/login" className={classButtonBlue}>
                                Inicio de Sesión
                            </NavLink>
                            <NavLink to="/register" className={classButtonBlue}>
                                Registro
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;