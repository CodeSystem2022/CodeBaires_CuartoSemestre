/* eslint-disable react/prop-types */
const FormError = ({ error }) => {
    return <>{error && <p>{error.message}</p>}</>
}

export default FormError;