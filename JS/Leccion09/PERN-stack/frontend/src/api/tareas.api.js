import axios from "axios";

export const crearTareaRequest = async (tarea) => {await axios.post("/tareas", tarea);}


