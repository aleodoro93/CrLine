import mongoose from "mongoose";

const Produtos = mongoose.model('Produtos',{
  id_produto: Number,
  tipoCostura: String,
  tamanhoFolha: String,
  tipoFolha: String,
  quantidadeFolhas: Number,
  gramaturaFolha:String,
  tipoCapa: String,
  tipoPauta: String,
  temNoEstoque: Boolean,
  quantiaNoEstoque: Number,
  imagensProduto: Array,
  nome: String,
  descricao: String,
  preco: Number,
  desconto: Number
})

export default Produtos;