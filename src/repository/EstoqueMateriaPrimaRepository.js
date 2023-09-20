import Estoque from "../models/EstoqueMateriaPrimaModel.js"
import Repository from "./Repository.js";

class EstoqueMateriaPrimaRepository extends Repository{

    static async criarMateriaPrima(MateriaPrima){
        const response = await Repository.create(Estoque, MateriaPrima)
        return response
    }

    static async buscarTodasAsMateriasPrimas(){
        const response = await Repository.findAll(Estoque)
        return response
    }

    static async buscarMateriaPrimaPorId(id){
        const response = await Repository.findById(Estoque, id)
        return response
    }

    static async atualizarMateriaPrimaPorId(id, data){
        const response = await Repository.updateById(Estoque, id, data)
        return response
    }

    static async deletarMateriaPrimaPorId(id){
        const response = await Repository.deleteById(Estoque, id)
        return response
    }

}

export default EstoqueMateriaPrimaRepository 