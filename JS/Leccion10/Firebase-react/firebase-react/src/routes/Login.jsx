// Importación de dependencias
import { useContext } from "react"; // Importa React y el hook useContext desde la biblioteca "react".
import { UserContext } from "../context/UserProvider"; // Importa el contexto UserContext desde un archivo llamado "UserProvider.js" en un directorio "context".
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate desde "react-router-dom".
import { useForm } from "react-hook-form"; // Importa el hook useForm de la biblioteca "react-hook-form".
import { erroresFirebase } from "../utils/erroresFirebase"; // Importa una función de utilidad para manejar errores relacionados con Firebase.
import { formValidates } from "../utils/formValidates"; // Importa funciones de validación para el formulario.

// Importación de componentes personalizados
import FormError from "../components/FormError"; // Importa un componente para mostrar errores del formulario.
import FormInput from "../components/FormInput"; // Importa un componente para los campos de entrada del formulario.

// Componente de Inicio de Sesión
const Login = () => {
    const { loginUser } = useContext(UserContext); // Obtiene la función "loginUser" desde el contexto UserContext utilizando el hook useContext.
    const navigate = useNavigate(); // Obtiene la función de navegación desde react-router-dom.

    // Extrae funciones de validación del objeto retornado por formValidates().
    const { required, patternEmail, minLength, validateTrim } = formValidates();

    // Inicializa el formulario utilizando el hook useForm de react-hook-form.
    const {
        register, // Registra los campos del formulario (registra un input).
        handleSubmit, // Maneja el envío del formulario y procesa la función onSubmit.
        formState: { errors }, // Obtiene los errores del formulario.
        setError, // Establece los errores del formulario.
    } = useForm();

    // Función que se ejecuta cuando se envía el formulario.
    const onSubmit = async ({ email, password }) => {
        try {
            // Llama a la función "loginUser" para iniciar sesión con el email y contraseña proporcionados.
            await loginUser(email, password);

            // Redirige al usuario a la página de inicio (ruta "/") después de iniciar sesión exitosamente.
            navigate("/");
        } catch (error) {
            console.log(error.code); // En caso de error, muestra el código del error en la consola.

            // Establece un error personalizado en el campo "firebase" del formulario.
            setError("firebase", {
                message: erroresFirebase(error.code), // Utiliza la función erroresFirebase para obtener un mensaje de error adecuado.
            });
        }
    };

    // Renderiza el componente del formulario de inicio de sesión.
    return (
        <>
            <h1>Login</h1>
            <FormError error={errors.firebase} /> {/* Muestra errores relacionados con Firebase. */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                >
                    <FormError error={errors.email} /> {/* Muestra errores relacionados con el campo de email. */}
                </FormInput>

                <FormInput
                    type="password"
                    placeholder="Ingrese Password"
                    {...register("password", {
                        minLength,
                        validate: validateTrim,
                    })}
                >
                    <FormError error={errors.password} /> {/* Muestra errores relacionados con el campo de contraseña. */}
                </FormInput>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </>
    );
};

export default Login;