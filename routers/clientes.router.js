import controlador from "../controllers/clientes.controller.js";
// https://expressjs.com/en/5x/api.html#router
import express from "express";
const clientesRouter = express.Router();

// ! CRUD -> R:READ -> Verbo GET // http://localhost:8080/api/clientes
clientesRouter.get("/", controlador.getAll);

// ! CRUD -> R:READ -> Verbo GET // http://localhost:8080/api/clientes/id
clientesRouter.get("/:id", controlador.getOne);

// ! CRUD -> C:CREATE -> Verbo POST
clientesRouter.post("/", controlador.createCliente);

// ! CRUD -> U:UPDATE -> Verbo PUT
clientesRouter.put("/:id", controlador.updateCliente);

// ! CRUD -> D:DELETE -> Verbo DELETE
clientesRouter.delete("/:id", controlador.deleteCliente);

export default clientesRouter;
