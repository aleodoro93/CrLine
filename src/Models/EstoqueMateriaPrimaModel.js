import mongoose from "mongoose";

const EstoqueMateriaPrima = mongoose.model('EstoqueMateriaPrima', {
  id_materiaPrima:String,
  descricao: String,
  quantia: Number,
  fornecedores: String

})

export default EstoqueMateriaPrima;