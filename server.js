import express from "express";
import clientesRouter from "./routers/clientes.router.js";
const app = express();
const PORT = 8080;

// ! MIDDLEWARE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ! RUTAS
app.use("/api/clientes", clientesRouter);

app.all("*", (req, res) => {
  const { path, method } = req;
  console.log(path);
  console.log(method);
  res.status(404).send({
    ok: false,
    status: 404,
    mensaje: `Algo ocurrió al querer acceder a al ruta: ${path}`,
  });
});

app.listen(8080, () => {
  console.log("Estoy levantando...");
  console.log(`http://localhost:${PORT}`);
});
