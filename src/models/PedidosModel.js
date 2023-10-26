import mongoose from "mongoose";

const Pedidos = mongoose.model("Pedidos", {
    idCliente: String,
    produtosPedido: Array
});

export default Pedidos;
