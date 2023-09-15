import mongoose from "mongoose";

const Produtos = mongoose.model('Produtos',{
    id_produto: String,
  tipoCostura: String,
  tamanhoFolha: String,
  tipoFolha: String,
  gramaturaFolha:String,
  tipoCapa: String,
  tipoPauta: String,
  temNoEstoque: Boolean,
  quantiaNoEstoque: Number
})

export default Produtos;