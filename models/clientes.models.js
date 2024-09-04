import { clientes } from "../src/constants/clientes.js";

// Variables/Constantes
let idCliente = clientes.length;

const leerClientes = () => {
  return clientes;
};

const leerCliente = (id) => {
  const cliente = clientes.find((cliente) => cliente.id == id) || {};
  return cliente;
};

const crearCliente = (cliente) => {
  cliente.id = ++idCliente;
  clientes.push(cliente);
  return cliente;
};

const actualizarCliente = (id, clienteEditado) => {
  clienteEditado.id = id;
  let index = clientes.findIndex((cli) => cli.id == id);
  clientes.splice(index, 1, clienteEditado);
  return clienteEditado;
};

const eliminarCliente = (id) => {
  let index = clientes.findIndex((cli) => cli.id == id);
  let array = clientes.splice(index, 1);
  let clienteEliminado = array[0];
  return clienteEliminado;
};

export default {
  leerClientes,
  leerCliente,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
