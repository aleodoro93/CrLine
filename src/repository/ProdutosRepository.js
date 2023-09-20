import Produtos from "../models/modelProdutos.js"
import Repository from "./Repository.js";

class ProdutosRepository extends Repository{

    static async criarProduto(produto){
        const response = await Repository.create(Produtos, produto)
        return response
    }

    static async buscarTodosProdutos(){
        const response = await Repository.findAll(Produtos)
        return response
    }

    static async buscarProdutoPorId(id){
        const response = await Repository.findById(Produtos, id)
        return response
    }

    static async atualizarProdutoPorId(id, data){
        const response = await Repository.updateById(Produtos, id, data)
        return response
    }

    static async deletarProdutoPorId(id){
        const response = await Repository.deleteById(Produtos, id)
        return response
    }

}

export default ProdutosRepository