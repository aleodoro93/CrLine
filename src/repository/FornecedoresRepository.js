import Repository from "./Repository.js"

class FornecedoresRepository extends Repository{
    
    static async criarFornecedores(fornecedor){
        const response =  await Repository.create(Fornecedores, fornecedor)
        return response
    }

    static async buscarTodosOsFornecedores(){
        const response = await Repository.findAll(Fornecedores)
        return response
    }

    static async buscarFornecedorPorId(id){
        const response = await Repository.findById(Fornecedores, id)
        return response
    }

    static async atualizaFornecedorPorId(id, fornecedor){
        const response = await Repository.updateById(Fornecedores, id, fornecedor)
        return response
    }

    static async deletaFornecedorPorId(id){
        const response = await Repository.deleteById(Fornecedores, id)
        return response
    }
}

export default FornecedoresRepository;