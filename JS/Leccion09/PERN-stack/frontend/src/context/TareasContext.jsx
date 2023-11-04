import { creatContext, useState, useContext } from "react";
import {listarTareasRequest, eliminarTareaRequest,crearTareaRequest } from "../api/tareas.api";

const TareasContext = createContext();

export const useTareas = () => {
    const context = useContext(TareasContext);

    if (!context) {
        throw new Error("useTareas debe estar dentro del proveedor TareasProvider");
    }

    return context;
};

export const TareasProvider = ({ children }) => {
    const [tareas, setTareas] = useState([]);
    const [errors, setError] = useState([]);

    const cargarTarea = async () => {
        const res = await listarTareasRequest()
        setTareas(res.data);
    };

    const crearTarea = async (tarea) => {
        try {
          const res = await crearTareaRequest(tarea);
          setTareas([...tareas, res.data]);
          return res.data;
        } catch (error) {
          if (error.response) {
            setError([error.response.data.message]);
          }
        }
      };




    const eliminarTarea = async (id) => {
        const res = await eliminarTareaRequest(id);
        if (res.status === 204) {
            setTareas(tareas.filter((tarea) => tarea.id !== id));
          }
    };  

return (
    <TareasContext.Provider value={{
        tareas,
        caragarTareas,
        eliminarTarea,
        crearTarea,
    }}>
        {children}
    </TareasContext.Provider>
);
