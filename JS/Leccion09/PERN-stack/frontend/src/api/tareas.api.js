import axios from "axios";

export const crearTareaRequest = async (tarea) => {await axios.post("/tareas", tarea);}

export const obtenerTareasRequest = () => {axios.get("/tareas");}

export const eliminarTareaRequest = () => (id) => axios.delete(`/tareas/${id}`);

export const listarTareaRequest = () => (id) => axios.get(`/tareas/${id}`);

export const actualizarTareaRequest = () => (id, tarea) => axios.put(`/tareas/${id}`, tarea);


