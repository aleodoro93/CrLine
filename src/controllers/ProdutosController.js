import ProdutosRepository from "../repository/ProdutosRepository.js"

import ValidacoesProdutos from "../services/ProdutosServices.js"

class ProdutosController {
    
    static rotas(app){

        app.get("/produtos",async (req,res)=>{
            try {
                const produto = await ProdutosRepository.buscarTodosProdutos()
                res.status(200).json(produto)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/produtos/:id",async (req, res)=>{
            try{
            const produto = ProdutosRepository.buscarProdutoPorId(req.params.id)
            if(!produto){
                throw new Error("O id desse produto não existe")
            }
            res.status(200).json(produto)
        }catch{
            res.status(404).json({ message: erro.message, id: req.params.id })
        } 
        })

        app.post("/produtos",async(req,res)=>{
            try{
                ValidacoesProdutos.validaProduto(req.body.tipoCostura, req.body.tamanhoFolha, req.body.tipoFolha, req.body.gramaturaFolha, req.body.tipoCapa, req.body.tipoPauta, req.body.temNoEstoque, req.body.quantiaNoEstoque)
                const inserir = await ProdutosRepository.criarProduto(req.body)
                res.status(201).json(inserir)
            }catch(erro){
                res.status(400).json({ message: erro.message })
            }

        })

        app.patch("/produtos/:id",async(req,res)=>{
            try {
                const produto = await ProdutosRepository.buscarProdutoPorId(req.params.id);
            
                if (!produto) {
                    throw new Error("O id desse produto não existe");
                }
            
                const data = req.body;

                if (data._id || data.__v){
                    throw new Error("Contém um atributo que não pode ser alterado")
                }
                if (data.tipoCostura){
                    ValidacoesProdutos.validaTipoCostura(data.tipoCostura)
                }
                if (data.tamanhoFolha){
                    ValidacoesProdutos.validaTamanhoFolha(data.tamanhoFolha)
                }
                if (data.tipoFolha){
                    ValidacoesProdutos.validaTipoFolha(data.tipoFolha)
                }
                if (data.gramaturaFolha){
                    ValidacoesProdutos.validaGramaturaFolha(data.gramaturaFolha)
                }
                if (data.tipoCapa){
                    ValidacoesProdutos.validaTipoCapa(data.tipoCapa)
                }
                if (data.tipoPauta){
                    ValidacoesProdutos.validaTipoPauta(data.tipoPauta)
                }
                if (data.temNoEstoque || data.quantiaNoEstoque){
                    ValidacoesProdutos.validaTemEstoque(data.temNoEstoque, data.quantiaNoEstoque)
                }

                await ProdutosRepository.atualizarProdutoPorId(req.params.id, data);
            
                res.status(200).json({ message: "Produto atualizado com sucesso" });
            } catch (erro) {
                res.status(400).json({ message: erro.message, id: req.params.id });
            }
            
        })

        app.delete("/produtos/:id",async(req,res)=>{
            try {
                const produto = await ProdutosRepository.buscarProdutoPorId(req.params.id)
                if (!produto) {
                    throw new Error("Id desse produto não existe")
                }
                const deletar = await ProdutosRepository.deletarProdutoPorId(req.params.id)
                res.status(200).json(deletar)
            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id: req.params.id })
            }
        })
    }
}

export default ProdutosController;