// Ponemos el codigo ser servidor

import express from "express";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => res.json({message: "Bienvenidos a mi proyecto"}));

export default app;
