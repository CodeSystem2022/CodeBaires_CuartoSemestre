import { Router } from "express";

//import { signin, signup, signout, profile } from "../controllers/auth.cotroller.js";

const router = Router ();

/*router.post("/signin",signin);
router.post("/signin",signup);
router.post("/signin",signout);
router.get("/signin",profile);
*/

router.post("/signin", (req,res) =>res.send ("ingresando"));
router.post("/signup", (req,res) =>res.send ("resgistrando"));
router.post("/signout",(req,res) =>res.send ("Cerrando sesion));
router.get("/profile", (req,res) =>res.send ("Perfil de usuario"));


export default router;