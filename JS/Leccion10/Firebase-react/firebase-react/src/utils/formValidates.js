export const formValidates = () => {
    return {
        required: {
            value: true, // Indica que el campo es requerido.
            message: "Este campo es obligatorio", // Mensaje de error si el campo está vacío.
        },
        patternEmail: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Expresión regular para validar un correo electrónico.
            message: "El email ingresado no es válido", // Mensaje de error si el correo electrónico no coincide con el patrón.
        },
        minLength: {
            value: 6, // Longitud mínima requerida.
            message: "Debe tener al menos 6 caracteres", // Mensaje de error si la longitud es menor que 6 caracteres.
        },
        validateTrim: {
            trim: (v) => {
                if (!v.trim()) {
                    return "No debe contener espacios en blanco"; // Mensaje de error si el campo contiene solo espacios en blanco.
                }
                return true; // La validación es exitosa.
            },
        },
        validateEquals(Value) {
            return {
                equals: (v) =>
                v === Value || "No coinciden las contraseñas", // Compara dos valores y devuelve un mensaje de error si no coinciden.
            };
        },
    };
};