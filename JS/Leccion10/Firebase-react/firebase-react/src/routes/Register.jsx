// Importación de dependencias
import { useContext } from "react"; // Importa React y los hooks useContext y useState desde la biblioteca "react".
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate desde "react-router-dom".
import { UserContext } from "../context/UserProvider"; // Importa el contexto UserContext desde un archivo llamado "UserProvider.js" en un directorio "context".
import { useForm } from "react-hook-form"; // Importa el hook useForm de la biblioteca "react-hook-form".
import { erroresFirebase } from "../utils/erroresFirebase"; // Importa una función de utilidad para manejar errores relacionados con Firebase.
import { formValidates } from "../utils/formValidates"; // Importa funciones de validación para el formulario.

// Importación de componentes personalizados
import FormError from "../components/FormError"; // Importa un componente para mostrar errores del formulario.
import FormInput from "../components/FormInput"; // Importa un componente para los campos de entrada del formulario.

// Componente de Registro
const Register = () => {
    const navigate = useNavigate(); // Obtiene la función de navegación desde react-router-dom.
    const { registerUser } = useContext(UserContext); // Obtiene la función "registerUser" desde el contexto UserContext utilizando el hook useContext.

    // Extrae funciones de validación del objeto retornado por formValidates().
    const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidates();

    // Inicializa el formulario utilizando el hook useForm de react-hook-form.
    const {
        register, // Registra los campos del formulario (registra un input).
        handleSubmit, // Maneja el envío del formulario y procesa la función onSubmit.
        formState: { errors }, // Obtiene los errores del formulario.
        getValues, // Obtiene los valores del formulario.
        setError, // Establece los errores del formulario.
    } = useForm();

    // Función que se ejecuta cuando se envía el formulario.
    const onSubmit = async ({ email, password }) => {
        try {
            // Llama a la función "registerUser" para registrar al usuario con el email y contraseña proporcionados.
            await registerUser(email, password);

            // Redirige al usuario a la página de inicio (ruta "/") después de registrar exitosamente.
            navigate("/");
        } catch (error) {
            console.log(error.code); // En caso de error, muestra el código del error en la consola.
            const { code, message } = erroresFirebase(error.code);
            setError(code, { message });
        }
    };

    // Renderiza el componente del formulario de registro.
    return (
        <>
            <h1>Registro</h1>
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

                <FormInput
                    type="password"
                    placeholder="Ingrese Password"
                    {...register("repassword", {
                        validate: validateEquals(getValues("password")), // Compara el valor con el campo de contraseña.
                    })}
                >
                    <FormError error={errors.repassword} /> {/* Muestra errores relacionados con el campo de confirmación de contraseña. */}
                </FormInput>
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;