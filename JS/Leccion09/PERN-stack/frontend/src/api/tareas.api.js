import axios from "axios";

export const crearTareaRequest = async (tarea) => {await axios.post("/tareas", tarea);}
export const obtenerTareasRequest = () => {axios.get("/tareas");}
export const eliminarTareaRequest = () => (id) => axios.delete(`/tareas/${id}`);


