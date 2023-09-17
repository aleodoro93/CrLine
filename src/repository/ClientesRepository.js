import Clientes from "../models/modelClientes.js"
import Repository from "./Repository.js";

class ClientesRepository extends Repository{

    static async criarCliente(cliente){
        const response = await Repository.create(Clientes, cliente)
        return response
    }

    static async buscarTodosClientes(){
        const response = await Repository.findAll(Clientes)
        return response
    }

    static async buscarClientePorId(id){
        const response = await Repository.findById(Clientes, id)
        return response
    }

    static async atualizarClientePorId(id, data){
        const response = await Repository.updateById(Clientes, id, data)
        return response
    }

    static async deletarClientePorId(id){
        const response = await Repository.deleteById(Clientes, id)
        return response
    }

}

export default ClientesRepository