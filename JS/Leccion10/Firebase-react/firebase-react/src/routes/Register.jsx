import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserProvider";


const Register = () => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const {registerUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      await registerUser(email, password);
      console.log("Usuario creado");
      navigate("/");
      
    } catch (error) {
      console.log(error.code);
      
    }
  }

  return(
    <>
    <h1>Registro</h1>
    <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      <input
        type="password"
        placeholder="Ingrese su contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
        </>
  );

}




export default Register