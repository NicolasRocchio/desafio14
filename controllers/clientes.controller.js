import { clientes } from "../src/constants/clientes.js";
import modelos from "../models/clientes.models.js";

const getAll = (req, res) => {
  // http://localhost:8080/api/clientes
  // ! 1. Obtengo los clientes del modelo
  const clientes = modelos.leerClientes();
  // ! 2. Muestro en la vista (json)
  res.status(200).json(clientes);
};

const getOne = (req, res) => {
  // ! 1. Obtengo el dato enviado por la URL
  const id = req.params.id;
  // ! 2. Obtengo basado en el id el cliente del modelo
  const cliente = modelos.leerCliente(id);
  // ! 3. Muestro en la vista el cliente (json)
  res.status(200).json(cliente);
};

const createCliente = (req, res) => {
  // http://localhost:8080/api/clientes
  // ! 1. Obtengo el dato enviado por el cuerpo de la petición
  const cliente = req.body;
  // ! 2. Le pido al modelo que agregue el cliente
  const clienteCreado = modelos.crearCliente(cliente);
  // ! 3. Muestro en la vista el cliente creado
  res.status(201).json(clienteCreado);
};

const updateCliente = (req, res) => {
  const id = req.params.id;
  const clienteEditado = req.body;

  const clienteActualizado = modelos.actualizarCliente(id, clienteEditado);

  res.status(200).json(clienteActualizado);
};

const deleteCliente = (req, res) => {
  const id = req.params.id;

  const clienteEliminado = modelos.eliminarCliente(id);

  res.status(200).send(clienteEliminado);
};

export default {
  getAll,
  getOne,
  createCliente,
  updateCliente,
  deleteCliente,
};
