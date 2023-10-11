import {pool} from "../db.js"
import bcrypt from "bcrypt";

export const signin = (req, res)=> res.send('ingresando');

export const signup = async(req, res) => {
    const {name , email, password} = req.body;

try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3 RETURNING *", [name, email, hashedPassword]);

   console.log(result);
   return res.json(result.rows[0]);
 } catch (error) {
  if(error.code === "23505"){
      return res.status(4000).json({message: " El correo ya esta registrado"});
   }  
 }
   
};

export const signout = (req, res)=> res.send('Cerrando sesion');

export const profile = (req, res)=> res.send('Perfil de ususario');