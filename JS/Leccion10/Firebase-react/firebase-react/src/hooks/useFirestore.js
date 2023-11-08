import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    updateDoc,
    where,
  } from "firebase/firestore/lite"; // Importación de las funciones y objetos necesarios de Firebase Firestore.
  
  import { useState } from "react"; // Importación de la función useState de React para manejar el estado local de la aplicación.
  import { db, auth } from "../firebase"; // Importación de la instancia de Firebase Firestore y la autenticación.
  import { nanoid } from "nanoid"; // Importación de la función nanoid para generar identificadores únicos.
  
  export const useFirestore = () => {
    const [data, setData] = useState([]); // Estado local para almacenar los datos recuperados de Firestore.
    const [error, setError] = useState(); // Estado local para almacenar mensajes de error.
    const [loading, setLoading] = useState({}); // Estado local para controlar el estado de carga de diversas operaciones.
  
    // Función para obtener los datos de Firestore.
    const getData = async () => {
        try {
            setLoading((prev) => ({ ...prev, getData: true })); // Marca que se está cargando la operación de obtener datos.
            const dataRef = collection(db, "urls"); // Referencia a la colección "urls" en Firestore.
            const q = query(dataRef, where("uid", "==", auth.currentUser.uid)); // Consulta para filtrar documentos por el ID del usuario autenticado.
            const querySnapshot = await getDocs(q); // Realiza la consulta.
            const dataDB = querySnapshot.docs.map((doc) => doc.data()); // Convierte los documentos en un arreglo de datos.
            setData(dataDB); // Actualiza el estado local con los datos recuperados.
        } catch (error) {
            console.log(error);
            setError(error.message); // Registra y almacena cualquier error que ocurra.
        } finally {
            setLoading((prev) => ({ ...prev, getData: false })); // Indica que la operación de obtener datos ha terminado.
        }
    };
  
    // Función para agregar nuevos datos a Firestore.
    const addData = async (url) => {
        try {
            setLoading((prev) => ({ ...prev, addData: true })); // Marca que se está cargando la operación de agregar datos.
            const newDoc = {
                enabled: true,
                nanoid: nanoid(6), // Genera un identificador único de 6 caracteres.
                origin: url,
                uid: auth.currentUser.uid, // Asocia el documento al usuario autenticado.
            };
  
            const docRef = doc(db, "urls", newDoc.nanoid); // Referencia al nuevo documento en Firestore.
            await setDoc(docRef, newDoc); // Crea el documento con los datos proporcionados.
            setData([...data, newDoc]); // Actualiza el estado local con el nuevo documento.
        } catch (error) {
            console.log(error);
            setError(error.message); // Registra y almacena cualquier error que ocurra.
        } finally {
            setLoading((prev) => ({ ...prev, addData: false })); // Indica que la operación de agregar datos ha terminado.
        }
    };
  
    // Función para eliminar datos de Firestore.
    const deleteData = async (nanoid) => {
        try {
            setLoading((prev) => ({ ...prev, [nanoid]: true })); // Marca que se está cargando la operación de eliminar datos.
            const docRef = doc(db, "urls", nanoid); // Referencia al documento a eliminar.
            await deleteDoc(docRef); // Elimina el documento.
            setData(data.filter((item) => item.nanoid !== nanoid)); // Actualiza el estado local sin el documento eliminado.
        } catch (error) {
            console.log(error);
            setError(error.message); // Registra y almacena cualquier error que ocurra.
        } finally {
            setLoading((prev) => ({ ...prev, [nanoid]: false })); // Indica que la operación de eliminar datos ha terminado.
        }
    };
  
    // Función para actualizar datos en Firestore.
    const updateData = async (nanoid, newOrigin) => {
        try {
            setLoading((prev) => ({ ...prev, updateData: true })); // Marca que se está cargando la operación de actualizar datos.
            const docRef = doc(db, "urls", nanoid); // Referencia al documento a actualizar.
            await updateDoc(docRef, { origin: newOrigin }); // Actualiza el campo "origin" del documento.
            setData(
                data.map((item) =>
                    item.nanoid === nanoid
                        ? { ...item, origin: newOrigin }
                        : item
                )
            ); // Actualiza el estado local con el dato modificado.
        } catch (error) {
            console.log(error);
            setError(error.message); // Registra y almacena cualquier error que ocurra.
        } finally {
            setLoading((prev) => ({ ...prev, [updateData]: false })); // Indica que la operación de actualizar datos ha terminado.
        }
    };
  
    // Función para buscar un documento por su identificador único.
    const searchData = async (nanoid) => {
        try {
            const docRef = doc(db, "urls", nanoid); // Referencia al documento a buscar.
            const docSnap = await getDoc(docRef); // Obtiene el documento.
            return docSnap; // Devuelve el documento encontrado.
        } catch (error) {
            console.log(error);
            setError(error.message); // Registra y almacena cualquier error que ocurra.
        }
    };
  
    // Devuelve un objeto con el estado local y las funciones para interactuar con Firestore.
    return {
        data,
        error,
        loading,
        getData,
        addData,
        deleteData,
        updateData,
        searchData,
    };
  };
  