import { Router } from "express";
import { signin, signup, signout, profile } from "../controllers/auth.cotroller.js";
const router = Router ();
router.post("/signin",signin);
router.post("/signin",signup);
router.post("/signin",signout);
router.get("/signin",profile);

export default router;