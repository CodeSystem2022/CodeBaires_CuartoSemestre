import {pool} from '../db.js'

export const listarTareas = (req, res)=> res.send('obteniendo tareas');

export const listarTarea = (req, res)=> res.send('obteniendo tarea unica');

export const crearTarea = async(req, res)=> {
    const {titulo, descripcion} = req.body;
    
    try { const {rows} = await pool.query('INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2)', [titulo, descripcion])
    console.log(rows);
    res.send('Creando tarea');

    } catch (error) { 
        console.log("Algo salió mal")
    }
    
}

export const actualizarTarea = (req, res)=> res.send('actualizando tarea unica');

export const eliminarTarea = (req, res)=> res.send('eliminando tarea unica ');