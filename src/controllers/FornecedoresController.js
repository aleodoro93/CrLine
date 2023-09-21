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

        app.get("/fornecedores/:id", async (req, res) => {
    try {
        const fornecedores = await FornecedoresRepository.buscarFornecedorPorId(req.params.id)
        if (!fornecedores) {
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

                const resposta = await FornecedoresRepository.deletaFornecedorPorId(id)
                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })

        app.patch("/fornecedores/:id", async (req, res) => {
            const id = req.params.id
            try {
                const fornecedores = await FornecedoresRepository.buscarFornecedorPorId(id)
                if (!fornecedores) {
                    throw new Error("Fornecedores não encontrada para este ID")
                }
                const data = req.body

                if (data._id || data.CNPJ || data.__v){
                    throw new Error("Contém um atributo que não pode ser alterado")
                }
                if (data.produtos){
                    ValidacoesFornecedores.validaDescricaoProdutos(data.produtos)
                }
                if (data.razaoSocial){
                    ValidacoesFornecedores.validaRazaoSocial(data.razaoSocial)
                }
                if (data.endereco){
                    ValidacoesFornecedores.validaEndereco(data.endereco)
                }
                if (data.telefone){
                    ValidacoesFornecedores.validaTelefone(data.telefone)
                }
                if (data.email){
                    ValidacoesFornecedores.validaEmail(data.email)
                }
                
                await FornecedoresRepository.atualizaFornecedorPorId(id, data)
                res.status(200).json({ message: "Fornecedores atualizada com sucesso" })
            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }
        })
    }
}

export default FornecedoresController
