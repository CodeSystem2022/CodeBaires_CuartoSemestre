// Importación de dependencias
import { useContext } from "react"; // Importa React y los hooks useContext y useState desde la biblioteca "react".
import { Link, useNavigate } from "react-router-dom"; // Importa el hook useNavigate desde "react-router-dom".
import { UserContext } from "../context/UserProvider"; // Importa el contexto UserContext desde un archivo llamado "UserProvider.js" en un directorio "context".
import { useForm } from "react-hook-form"; // Importa el hook useForm de la biblioteca "react-hook-form".
import { erroresFirebase } from "../utils/erroresFirebase"; // Importa una función de utilidad para manejar errores relacionados con Firebase.
import { formValidates } from "../utils/formValidates"; // Importa funciones de validación para el formulario.
import { useState } from "react"; // Importa el hook useState de la biblioteca "react".


// Importación de componentes personalizados
import FormError from "../components/FormError"; // Importa un componente para mostrar errores del formulario.
import FormInput from "../components/FormInput"; // Importa un componente para los campos de entrada del formulario.
import Title from "../components/Title"; // Importa un componente para mostrar un título en la página.
import Button from "../components/Button"; // Importa un componente para mostrar un botón en la página.


// Componente de Registro
const Register = () => {
    const navigate = useNavigate(); // Obtiene la función de navegación desde react-router-dom.
    const { registerUser } = useContext(UserContext); // Obtiene la función "registerUser" desde el contexto UserContext utilizando el hook useContext.
    const [loading, setLoading] = useState(false);
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
            setLoading(true);
            // Llama a la función "registerUser" para registrar al usuario con el email y contraseña proporcionados.
            await registerUser(email, password);

            // Redirige al usuario a la página de inicio (ruta "/") después de registrar exitosamente.
            navigate("/home");
        } catch (error) {
            console.log(error.code); // En caso de error, muestra el código del error en la consola.
            const { code, message } = erroresFirebase(error.code);
            setError(code, { message });
        } finally {
            setLoading(false);
        }
    };

    // Renderiza el componente del formulario de registro.
    return (
        <>
            <Title text="Registro" />
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
                    error={errors.password ? true : false} //  muestra el error del campo password

                >
                    <FormError error={errors.password} /> {/* Muestra errores relacionados con el campo de contraseña. */}
                </FormInput>

                <FormInput
                    type="password"
                    placeholder="Confirme su contraseña"
                    {...register("repassword", {
                        validate: validateEquals(getValues("password")), // Compara el valor con el campo de contraseña.
                    })}
                    label="Confirma su contraseña"
                    error={errors.repassword ? true : false} //  muestra el error del campo repassword
                >
                    <FormError error={errors.repassword} /> {/* Muestra errores relacionados con el campo de confirmación de contraseña. */}
                </FormInput>
                <Button text="Registro" type="submit" />
                {/* Botón de inicio de sesión o indicador de carga según el estado "loading" */}
                <Button type="submit" text="Iniciar Sesión" color="blue" loading={loading} />
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

export default Register;