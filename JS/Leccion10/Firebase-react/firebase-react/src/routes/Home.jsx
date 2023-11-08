import { useEffect, useState } from "react"; // Importa las funciones useEffect y useState de React.
import { useFirestore } from "../hooks/useFirestore"; // Importa el gancho personalizado para interactuar con Firestore.
import { formValidates } from "../utils/formValidates"; // Importa funciones para validar formularios.
import { useForm } from "react-hook-form"; // Importa el gancho personalizado para manejar formularios.

import Button from "../components/Button"; // Importa el componente Button.
import Title from "../components/Title"; // Importa el componente Title.
import FormInput from "../components/FormInput"; // Importa el componente FormInput.
import FormError from "../components/FormError"; // Importa el componente FormError.
import { erroresFirebase } from "../utils/erroresFirebase"; // Importa funciones para manejar errores de Firebase.

const Home = () => {
  const [copy, setCopy] = useState({ propiedadX: true }); // Estado local para manejar la copia al portapapeles.
  const { required, patternURL } = formValidates(); // Funciones de validación de formularios.

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setError,
    setValue,
  } = useForm(); // Configura el formulario y las funciones de React Hook Form.

  const {
    loading,
    data,
    error,
    getData,
    addData,
    deleteData,
    updateData,
  } = useFirestore(); // Obtiene funciones y datos de Firestore a través del gancho personalizado.
  const [newOriginID, setNewOriginID] = useState(); // Estado local para el ID de la URL que se está editando.

  useEffect(() => {
    console.log("getData");
    getData(); // Llama a la función para obtener datos de Firestore cuando el componente se monta.
  }, []);

  if (loading.getData) return <p>Loading data getData...</p>; // Si se está cargando la obtención de datos, muestra un mensaje de carga.
  if (error) return <p>{error}</p>; // Si hay un error, muestra un mensaje de error.

  // Función que se ejecuta al enviar el formulario.
  const onSubmit = async ({ url }) => {
    try {
      if (newOriginID) {
        await updateData(newOriginID, url); // Si se está editando una URL, actualiza los datos.
        setNewOriginID("");
      } else {
        await addData(url); // Si no se está editando una URL, agrega una nueva URL.
      }
      resetField("url"); // Limpia el campo de URL en el formulario.
    } catch (error) {
      const { code, message } = erroresFirebase(error.code); // Maneja errores de Firebase.
      setError(code, { message }); // Establece un error en el formulario.
    }
  };

  // Función para manejar el clic en el botón "Delete" de una URL.
  const handleClickDelete = async (nanoid) => {
    console.log("click delete");
    await deleteData(nanoid); // Elimina una URL de Firestore.
  };

  // Función para manejar el clic en el botón "Edit" de una URL.
  const handleClickEdit = (item) => {
    setValue("url", item.origin); // Llena el campo de URL en el formulario con la URL existente.
    setNewOriginID(item.nanoid); // Almacena el ID de la URL que se está editando.
  };

  const pathURL = window.location.href; // Obtiene la URL actual del navegador.

  // Función para copiar la URL al portapapeles.
  const handleClickCopy = async (nanoid) => {
    await navigator.clipboard.writeText(pathURL + nanoid); // Copia la URL completa al portapapeles.
    console.log("copiado");
    setCopy({ [nanoid]: true }); // Actualiza el estado local para mostrar "Copied".
  };

  return (
    <>
      <Title text="Administrator URLs" /> 

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Ingresa tu URL"
          type="text"
          placeholder="www.UTN-FRSR.com.ar"
          {...register("url", {
            required,
            pattern: patternURL,
          })}
          error={errors.url}
        >
          <FormError error={errors.url} />
        </FormInput>

        {newOriginID ? (
          <Button
            type="submit"
            text="EDIT URL"
            color="yellow"
            loading={loading.updateData}
          />
        ) : (
          <Button
            type="submit"
            text="Agregar"
            color="purple"
            loading={loading.addData}
            onClick={handleSubmit}
          />

        )}
      </form>

      {data.map((item) => (
        <div
          key={item.nanoid}
          className="p-6 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-2"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pathURL}
            {item.nanoid}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.origin}
          </p>
          <div className="flex space-x-2">
            <Button
              type="button"
              text="Eliminar"
              color="red"
              loading={loading[item.nanoid]}
              onClick={() => handleClickDelete(item.nanoid)}
            />
            <Button
              type="button"
              text="Editar"
              color="yellow"
              onClick={() => handleClickEdit(item)}
            />
            <Button
              type="button"
              text={copy[item.nanoid] ? "Copied" : "Copiar"}
              color="blue"
              onClick={() => handleClickCopy(item.nanoid)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Home; // Exporta el componente Home para su uso en la aplicación.