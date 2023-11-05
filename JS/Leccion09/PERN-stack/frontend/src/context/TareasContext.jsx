import { createContext, useState, useContext } from "react";
import { 
      eliminarTareaRequest,
      obtenerTareasRequest, 
      crearTareaRequest,
      listarTareaRequest,
      actualizarTareaRequest,
      } from "../api/tareas.api";

const TareasContext = createContext();

export const useTareas = () => {
    const context = useContext(TareasContext);
    if (!context) {
        throw new Error("useTareas debe estar dentro del proveedor TareasProvider");
    }

    return context;
};


// eslint-disable-next-line react/prop-types
export const TareasProvider = ({ children }) => {
    const [tareas, setTareas] = useState([]);
    const [errors, setError] = useState([]);

    const cargarTareas = async () => {
        const res = await obtenerTareasRequest();
        setTareas(res.data);
    };

    const cargarTarea = async (id, tarea) => {
        const res = await listarTareaRequest(id, tarea);
        return res.data;
    }

    const crearTarea = async (tarea) => {
        try {
          const res = await crearTareaRequest(tarea);
          setTareas([...tareas, res.data]);
          return res.data;
        } catch (errors) {
          if (errors.response) {
            setError([errors.response.data.message]);
          }
        }
      };

    const eliminarTarea = async (id) => {
        const res = await eliminarTareaRequest(id);
        if (res.status === 204) {
            setTareas(tareas.filter((tarea) => tarea.id !== id));
          }
    };

    const editarTarea = async (id, tarea) => {
      try {
        const res = await actualizarTareaRequest(id, tarea);
        return res.data;
      } catch (error) {
        if (error.response) {
          setError([error.response.data.message]);
        }
      }
    };

      return (
        <TareasContext.Provider value={{
            tareas,
            cargarTareas,
            eliminarTarea,
            crearTarea,
            cargarTarea,
            editarTarea,
            errors,
        }}>
            {children}
        </TareasContext.Provider>
    );
  };




    

