import { Router } from "express";
//import { actualizarTarea, crearTarea, eliminarTarea, listarTarea } from "../controllers/tareas.cotroller.js";

const router = Router();
/*
router.get('/tareas',listarTareas);
router.get('/tareas/:id',listarTarea);
router.post('/tareas',crearTarea);
router.put('/tareas/:id',actualizarTarea);
router.delete('/tareas/:id', eliminarTarea);
*/

router.get('/tareas',(req,res) => res.send('obteniendo tareas'));
router.get('/tareas/:id',(req,res) => res.send('obteniendo tarea unica'));
router.post('/tareas',(req,res) => res.send('creando tarea'));
router.put('/tareas/:id',(req,res) => res.send('actualizando tarea unica'));
router.delete('/tareas',(req,res) => res.send('eliminando tarea unica'));

export default router;