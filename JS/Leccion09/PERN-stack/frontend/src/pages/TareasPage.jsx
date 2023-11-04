import { useEffect } from "react"
import { CardTareas } from "../components/tareas/CardTareas";
import {useTareas} from "../context/TareasContext";

function TareasPage() {
  const {tareas, cargarTareas} = useTareas();
  
 
  useEffect(() => {
    cargarTareas()
   }, []);

  return (
    <div className="grid grid-cols-3 gap-2">{
      tareas.map((tarea) => (
        <CardTareas tarea={tarea} key={tarea.id}></CardTareas>
      ))
      }</div>
  );
}

export default TareasPage