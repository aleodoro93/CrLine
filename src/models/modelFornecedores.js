import mongoose from "mongoose";

const Fornecedores = mongoose.model('Fornecedores',{
    
    id_CNPJ: String,
    id_materiaPrima: String,
    produtos: String, 
    endereco: String,
    telefone: String,
    email: String

})

export default Fornecedores;