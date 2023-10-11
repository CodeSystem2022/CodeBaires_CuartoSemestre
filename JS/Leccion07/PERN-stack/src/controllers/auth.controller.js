import {pool} from "../db.js"

export const signin = (req, res)=> res.send('ingresando');

export const signup = async(req, res) => {
    const {name , email, password} = req.body;
    res.send("Registrando");

try {
    const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3", [name, email, password])
    console.log(result);
   return res.json{result.rows[0]};

} catch (error) {
    
}
   
};

export const signout = (req, res)=> res.send('Cerrando sesion');

export const profile = (req, res)=> res.send('Perfil de ususario');