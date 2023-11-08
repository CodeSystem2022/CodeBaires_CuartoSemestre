import { forwardRef } from "react";

// Definición del componente FormInput utilizando forwardRef
const FormInput = forwardRef(
    ({ type, placeholder, onChange, onBlur, name, children }, ref) => {
        return (
            <>
                <input
                    type={type}
                    placeholder={placeholder}
                    ref={ref} // La referencia a este elemento se pasa a través de forwardRef.
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                />
                {children} {/* Esto permite incluir contenido adicional dentro del componente. */}
            </>
        )
    }
)

export default FormInput;