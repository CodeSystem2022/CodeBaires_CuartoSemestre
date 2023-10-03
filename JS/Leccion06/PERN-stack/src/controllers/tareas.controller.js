import {pool} from '../db.js'

export const listarTareas = (req, res)=> res.send('obteniendo tareas');

export const listarTarea = (req, res)=> res.send('obteniendo tarea unica');

export const crearTarea = (req, res)=> {
    const {titulo, descripcion} = req.body;
    res.send('Creando tarea');

    const {rows} = pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)', [titulo, descripcion])
    console.log(rows);
}

export const actualizarTarea = (req, res)=> res.send('actualizando tarea unica');

export const eliminarTarea = (req, res)=> res.send('eliminando tarea unica ');