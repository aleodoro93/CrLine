import ClientesRepository from "../repository/ClientesRepository.js"
import ValidacoesClientes from "../services/ClientesServices.js"

class ClientesController{
    static rotas(app){
        
        app.get("/clientes", async (req, res) => {
            try {
                const clientes = await ClientesRepository.buscarTodosClientes()
                res.status(200).json(clientes)
            } catch (erro) {

                res.status(404).json(erro.message)
            }
        })

        app.get("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)
                if (!cliente) {
                    throw new Error("Id do cliente está inválido ou não cadastrado")
                }
                res.status(200).json(cliente)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/clientes", async (req, res) => {
            try {
                const cliente = req.body
                ValidacoesClientes.validaCliente(cliente)
                const inserir = await ClientesRepository.criarCliente(cliente)
                res.status(201).json(inserir)
            } catch (erro) {
                res.status(400).json({ message: erro.message })
            }
        })

        app.delete("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)
                if (!cliente) {
                    throw new Error("Cliente não encontrado")
                }
                const resposta = await ClientesRepository.deletarClientePorId(req.params.id)
                res.status(200).json(resposta)
            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id: req.params.id })
            }
        })

        app.patch("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)
                if (!cliente) {
                    throw new Error("Id do cliente está inválido ou não cadastrado")
                }
                const data = req.body
                if (data._id || data.CPF || data.__v){
                    throw new Error("Contém um atributo que não pode ser alterado")
                }
                if (data.nome){
                    ValidacoesClientes.validaNome(data.nome)
                }
                if (data.endereco){
                    ValidacoesClientes.validaEndereco(data.endereco)
                }
                if (data.telefone){
                    ValidacoesClientes.validaTelefone(data.telefone)
                }
                if (data.email){
                    ValidacoesClientes.validaEmail(data.email)
                }
                await ClientesRepository.atualizarClientePorId(req.params.id, data)
                res.status(200).json({ message: "Cliente atualizado com sucesso" })
            } catch (erro) {
                res.status(400).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/clientes/login", async (req, res) => {
            try {
                if (!req.body) throw new Error("Erro! Verifique os dados")

                const email = req.body.email
                const senha = req.body.senha

                ValidacoesClientes.validaEmail(email)
                ValidacoesClientes.validaSenha(senha)

                const resposta = await ClientesRepository.buscarClientePorChave( "email", email )

                if (!resposta) throw new Error("E-mail não cadastrado")
                if (resposta.senha != senha) throw new Error("Senha incorreta")
                
                res.status(200).json({ message: "Cliente logado com sucesso"})

            } catch (e) {
                if (e.message == "Erro! Verifique os dados") {
                    res.status(400).json({ status: 400, message: e.message })
                } else if (e.message == "Senha incorreta") {
                    res.status(401).json({ status: 401, message: e.message })
                } else {
                    res.status(404).json({ status: 404, message: e.message })
                }
            }
        })

    }
}

export default ClientesController