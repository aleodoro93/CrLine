import FornecedoresRepository from "../repository/FornecedoresRepository.js"
import ValidacoesFornecedores from "../services/FornecedoresServices.js"

class FornecedoresController {
    static rotas(app) {
        app.get("/fornecedores", async (req, res) => {
            try {
                const fornecedores = await FornecedoresRepository.buscarTodosOsFornecedores()
                res.status(200).json(fornecedores)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/fornecedores:id", async (req, res) => {
            try {
                const fornecedores = await FornecedoresRepository.buscarFornecedoresPorId(req.params.id)

                if (!materiaPrima) {
                    throw new Error("Fornecedores não encontrada para este ID")
                }
                res.status(200).json(fornecedores)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/fornecedores", async (req, res) => {
            try {
                ValidacoesFornecedores.validaFornecedores(req.body.CNPJ, req.body.produtos, req.body.razaoSocial, req.body.endereco, req.body.telefone, req.body.email)

                const Fornecedores= req.body

                const inserir = await FornecedoresRepository.criarFornecedores(Fornecedores)

                res.status(201).json(inserir)

            } catch (erro) {
                res.status(400).json({ message: erro.message })
            }
        })

        app.delete("/fornecedores/:id", async (req, res) => {
            const id = req.params.id
            try {
                const fornecedores = await FornecedoresRepository.buscarFornecedoresPorId(id)

                if (!fornecedores) {
                    throw new Error("Fornecedores não encontrada")
                }

                const resposta = await FornecedoresRepository.deletarFornecedoresPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.patch("/fornecedores/:id", async (req, res) => {
            const id = req.params.id
            try {
                const fornecedores = await FornecedoresRepository.buscarFornecedoresPorId(id)

                if (!fornecedores) {
                    throw new Error("Fornecedores não encontrada para este ID")
                }

                const atualizacao = req.body

                await FornecedoresRepository.atualizaFornecedoresPorId(id, atualizacao)

                res.status(200).json({ message: "Fornecedores atualizada com sucesso" })

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }
        })
    }
}

export default FornecedoresController
