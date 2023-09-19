import mongoose from "mongoose";

const Pedidos = mongoose.model('Pedidos', {
    
    id_pedido: String,
    CPF: String,
    quantia: String,
    data: Date

})

export default Pedidos;