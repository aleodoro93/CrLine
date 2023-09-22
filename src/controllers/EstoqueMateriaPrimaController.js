import EstoqueMateriaPrimaRepository from "../repository/EstoqueMateriaPrimaRepository.js"
import ValidacoesEstoqueMateriaPrima from "../services/EstoqueMateriaPrimaService.js"

class EstoqueMateriaPrimaController {
    static rotas(app) {
        app.get("/estoque-materia-prima", async (req, res) => {
            try {
                const estoqueMateriaPrima = await EstoqueMateriaPrimaRepository.buscarTodasAsMateriasPrimas()
                res.status(200).json(estoqueMateriaPrima)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/estoque-materia-prima/:id", async (req, res) => {
            try {
                const materiaPrima = await EstoqueMateriaPrimaRepository.buscarMateriaPrimaPorId(req.params.id)

                if (!materiaPrima) {
                    throw new Error("Matéria-prima não encontrada para este ID")
                }
                res.status(200).json(materiaPrima)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/estoque-materia-prima", async (req, res) => {
            try {
                ValidacoesEstoqueMateriaPrima.validaMaterial(req.body.descricao, req.body.quantia, req.body.fornecedores)

                const materiaPrima = req.body

                const inserir = await EstoqueMateriaPrimaRepository.criarMateriaPrima(materiaPrima)

                res.status(201).json(inserir)

            } catch (erro) {
                res.status(400).json({ message: erro.message })
            }
        })

        app.delete("/estoque-materia-prima/:id", async (req, res) => {
            const id = req.params.id
            try {
                const materiaPrima = await EstoqueMateriaPrimaRepository.buscarMateriaPrimaPorId(id)

                if (!materiaPrima) {
                    throw new Error("Matéria-prima não encontrada")
                }

                const resposta = await EstoqueMateriaPrimaRepository.deletarMateriaPrimaPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.patch("/estoque-materia-prima/:id", async (req, res) => {
            const id = req.params.id
            try {
                const materiaPrima = await EstoqueMateriaPrimaRepository.buscarMateriaPrimaPorId(id)

                if (!materiaPrima) {
                    throw new Error("Matéria-prima não encontrada para este ID")
                }

                const data = req.body

                if (data._id || data.id_materiaPrima || data.__v){
                    throw new Error("Contém um atributo que não pode ser alterado")
                }
                if (data.descricao){
                    ValidacoesEstoqueMateriaPrima.validaDescricao(data.descricao)
                }
                if (data.quantia){
                    ValidacoesEstoqueMateriaPrima.validaQuantia(data.quantia)
                }
                if (data.fornecedores){
                    ValidacoesEstoqueMateriaPrima.validaFornecedores(data.fornecedores)
                }

                await EstoqueMateriaPrimaRepository.atualizarMateriaPrimaPorId(id, data)

                res.status(200).json({ message: "Matéria-prima atualizada com sucesso" })

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }
        })
    }
}

export default EstoqueMateriaPrimaController