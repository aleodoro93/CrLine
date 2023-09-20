import Pedidos from "../models/PedidosModel.js"
import Repository from "./Repository.js";

class PedidosRepository extends Repository{

    static async criarPedidos(pedido){
        const response = await Repository.create(Pedidos, pedido)
        return response
    }

    static async buscarTodosPedidos(){
        const response = await Repository.findAll(Pedidos)
        return response
    }

    static async buscarPedidosPorId(id){
        const response = await Repository.findById(Pedidos, id)
        return response
    }

    static async atualizarPedidosPorId(id, data){
        const response = await Repository.updateById(Pedidos, id, data)
        return response
    }

    static async deletarPedidosPorId(id){
        const response = await Repository.deleteById(Pedidos, id)
        return response
    }

}

export default PedidosRepository