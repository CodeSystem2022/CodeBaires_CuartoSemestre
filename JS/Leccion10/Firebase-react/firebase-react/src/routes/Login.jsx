/* eslint-disable no-undef */
// Importación de dependencias
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formValidates } from "../utils/formValidates"; // Importa funciones de validación para el formulario.


// Importación de componentes personalizados
import FormError from "../components/FormError"; // Importa un componente para mostrar errores del formulario.
import FormInput from "../components/FormInput"; // Importa un componente para los campos de entrada del formulario.
import Title from "../components/Title";
import Button from "../components/Button";

// Componente de Inicio de Sesión
const Login = () => {
    const { loginUser } = useContext(UserContext); // Obtiene la función "loginUser" desde el contexto UserContext utilizando el hook useContext.
    const [loading, setLoading] = useState(false);
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
            setLoading(true); // Establecer el estado de carga a "true"
            // Llama a la función "loginUser" para iniciar sesión con el email y contraseña proporcionados.
            await loginUser(email, password);

            // Redirige al usuario a la página de inicio (ruta "/") después de iniciar sesión exitosamente.
            navigate("/Home");
        } catch (error) {
            console.log(error.code); // En caso de error, muestra el código del error en la consola.
            setError(code, { message }); // Crear un error en el formulario (code es el nombre del error y message es el mensaje del error)
        } finally {
            setLoading(false); // Establecer el estado de carga nuevamente a "false" después de la operación
        }
    };

    // Renderiza el componente del formulario de inicio de sesión.
    return (
        <>
            <Title text="Inicio de sesión" />
            <FormError error={errors.firebase} /> {/* Muestra errores relacionados con Firebase. */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email"
                    placeholder="Ingrese su email"
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                    label="Ingrese su correo"
                    error={errors.email ? true : false} //  muestra el error del campo email
                >
                    <FormError error={errors.email} /> {/* Muestra errores relacionados con el campo de email. */}
                </FormInput>

                <FormInput
                    type="password"
                    placeholder="Ingrese su contraseña"
                    {...register("password", {
                        minLength,
                        validate: validateTrim,
                    })}
                    label="Ingrese su contraseña"
                    error={errors.password ? true : false}
                >
                    <FormError error={errors.password} /> {/* Muestra errores relacionados con el campo de contraseña. */}
                </FormInput>
                {/* Botón de inicio de sesión o indicador de carga según el estado "loading" */}
                <Button type="submit" text="Iniciar Sesión" color="purple" loading={loading} onClick={handleSubmit} />
              


            </form>
            <p className="my-4 text-sm flex justify-between px-3">
                Volver a la página de  inico
                <Link to="/" className="text-blue-700 hover:text-blue-900">
                    Inicio
                </Link>
            </p>
        </>
    );
};

export default Login;