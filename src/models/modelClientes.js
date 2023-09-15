import mongoose from "mongoose";

const Clientes = mongoose.model('Clientes',{
    id_CPF: String, 
    nome: String,
    endereco: String,
    telefone: String,
    email: String
})

export default Clientes;