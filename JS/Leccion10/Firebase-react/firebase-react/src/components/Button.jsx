/* eslint-disable react/prop-types */
import ButtonLoading from "./ButtonLoading";

const colorClasses = {
  purple: "bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
  blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900",
  red: "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  yellow: "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900",
};

const baseButtonClass = "focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2";

const Button = ({ text, type, color = "purple", loading, onClick }) => {
  // Si la propiedad "loading" es verdadera, muestra un componente de carga y sale de la función.
  if (loading) return <ButtonLoading />;

  // Obtiene la clase de color del objeto colorClasses.
  const classColor = colorClasses[color];

  // Devuelve un botón con las siguientes propiedades:
  // - onClick: la función a ejecutar cuando se hace clic en el botón.
  // - type: el tipo de botón (por ejemplo, "button" o "submit").
  // - className: una combinación de la clase base y la clase de color.
  // - text: el texto que se mostrará en el botón.
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseButtonClass} ${classColor}`}
    >
      {text}
    </button>
  );
};

export default Button;