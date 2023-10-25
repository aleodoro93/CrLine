import mongoose from "mongoose";

const Clientes = mongoose.model('Clientes',{
    nome: String,
    sobrenome: String,
    email: String,
    senha: String
})

export default Clientes;