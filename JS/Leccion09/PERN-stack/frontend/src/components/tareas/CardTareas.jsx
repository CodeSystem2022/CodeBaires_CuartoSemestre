/* eslint-disable react/prop-types */
import { Card, Button } from "../ui";
import { useTareas } from "../../context/TareasContext";
import { Navigate } from "react-router-dom";
import {PiTrashSimpleLight, PiPencil} from "react-icons/pi"


export function CardTareas({tarea}) {
    const { eliminarTarea } = useTareas();
    const navigate = Navigate();

    return (
        <Card key={tarea.id} className="py-2 px-7 justify-center flex flex-col">
            <div>
                <h1 className="text-2xl font-bold">{tarea.titulo}</h1>
                <p className="py-4">{tarea.descripcion}</p>
            </div>
            <div className="flex justify-end gap-x-2"> 
                <Button
                    onClick={() => navigate(`/tareas/${tarea.id}/editar`)}
                ><PiPencil className="text-white"/>
                    Editar</Button>
                <Button className="bg-red-500 hover:bg-red-600"
                onClick={async() => {
                    if(window.confirm("¿Estás seguro de eliminar esta tarea?")){
                        await eliminarTarea(tarea.id);
                    }
                    }}
                    
                >
                    <PiTrashSimpleLight className="text-white"/>
                    eliminar</Button>
                </div>
        </Card>
    );
}

export default CardTareas;