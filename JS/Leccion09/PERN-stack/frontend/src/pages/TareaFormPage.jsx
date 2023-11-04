import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function TareaFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [postError, setPostError] = useState([]);
  const { crearTarea } = useTareas();
  const onSubmit = handleSubmit(async (data) => {
    const res = await crearTarea(data);
    if (res){
      navigate("/tareas");
    }
  });

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {postError.map((error, i) => (
          <p className="bg-red-500 text-white p-2" key={i}>
            {error}{" "}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">Formulario de tareas</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="titulo">Titulo</Label>
          <Input
            type="text"
            placeholder="Titulo"
            autoFocus
            {...register("titulo", { required: true })}
          ></Input>
          {errors.titulo && (
            <p className="text-red-500">El título es requerido</p>
          )}

          <Label htmlFor="descripcion">Descripcion</Label>
          <Textarea
            type="text"
            placeholder="Descripcion"
            rows={3}
            {...register("descripcion")}
          ></Textarea>

          <Button>Guardar</Button>
        </form>
      </Card>
    </div>
  );
}

export default TareaFormPage;
