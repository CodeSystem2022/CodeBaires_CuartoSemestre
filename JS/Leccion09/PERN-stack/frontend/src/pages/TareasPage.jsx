import { useEffect } from "react"
import { CardTareas } from "../components/tareas/CardTareas";
import {useTareas} from "../context/TareasContext";

function TareasPage() {
  const {tareas, cargarTareas} = useTareas();
  
 
  useEffect(() => {
    cargarTareas()
   }, []);

   if (tareas.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem ]">
        <h1 className="text-2xl font-bold">No hay tareas</h1>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-2">{
      tareas.map((tarea) => (
        <CardTareas tarea={tarea} key={tarea.id}></CardTareas>
      ))
      }</div>
  );
}

export default TareasPage