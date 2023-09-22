import mongoose from "mongoose";

const Fornecedores = mongoose.model('Fornecedores',{
    
    CNPJ: String,
    produtos: String, 
    razaoSocial: String,
    endereco: String,
    telefone: String,
    email: String

})

export default Fornecedores;