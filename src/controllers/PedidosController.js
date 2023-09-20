import PedidosRepository from "../repository/PedidosRespository.js"
import ValidacoesPedidos from "../services/PedidosSevices.js"

class PedidosController{
    static rotas(app){
        
        app.get("/pedidos", async (req, res) => {
            try {
                const pedido = await PedidosRepository.buscarTodosPedidos()
                res.status(200).json(pedido)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/pedidos/:id", async (req, res) => {
            try {
                const pedido = await PedidosRepository.buscarPedidosPorId(req.params.id)
                if (!pedido) {
                    throw new Error("Id do pedido está inválido ou não cadastrado")
                }
                res.status(200).json(pedido)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/pedidos", async (req, res) => {
            try {
                ValidacoesPedidos.validaPedidos(req.body.CPF, req.body.quantia, req.body.data)
                const pedido = req.body
                const inserir = await PedidosRepository.criarPedidos(pedido)
                res.status(201).json(inserir)
            } catch (erro) {
            
                res.status(400).json({ message: erro.message })
            }
        })

        app.delete("/pedidos/:id", async (req, res) => {
            try {
                const pedido = await PedidosRepository.buscarPedidosPorId(req.params.id)
                if (!pedido) {
                    throw new Error("Pedido não encontrado")
                }
                const resposta = await PedidosRepository.deletarPedidosPorId(req.params.id)
                res.status(200).json(resposta)
            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id: req.params.id })
            }
        })

        app.patch("/pedidos/:id", async (req, res) => {
            try {
                const pedido = await PedidosRepository.buscarPedidosPorId(req.params.id)
                if (!pedido) {
                    throw new Error("Id do pedido está inválido ou não cadastrado")
                }
                const data = req.body
                await PedidosRepository.atualizarPedidosPorId(req.params.id, data)
                res.status(200).json({ message: "pedido atualizado com sucesso" })
            } catch (erro) {
                res.status(400).json({ message: erro.message, id: req.params.id })
            }
        })

    }
}

export default PedidosController;