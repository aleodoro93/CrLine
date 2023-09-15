import mongoose from "mongoose";

const Pedidos = mongoose.model('Pedidos', {
    id_pedido: String,
    id_CPF: Number,
    quantia: String,
    data: Date

})

export default Pedidos;