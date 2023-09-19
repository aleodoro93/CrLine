import mongoose from "mongoose";

const Fornecedores = mongoose.model('Fornecedores',{
    
    CNPJ: Number,
    produtos: String, 
    endereco: String,
    telefone: Number,
    email: String

})

export default Fornecedores;