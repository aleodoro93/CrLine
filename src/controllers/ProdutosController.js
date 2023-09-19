import ValidaProduto from "../services/ProdutosServices"

class ProdutosController {
    
    static rotas(app){

        app.get("/produtos",async (req,res)=>{
            const produto = await ProdutosRepository.buscarTodosProdutos()
            res.status(200).json(produtos)
        })

        app.get("/produtos/:id",async (req, res)=>{
            try{
            const produto = ProdutosRepository.buscarProdutoPorId(req.params.id)
            if(!produto){
                throw new Error("O id desse produto não existe")
            }
            res.status(200).json(produtos)
        }catch{
            res.status(404).json({ message: erro.message, id: req.params.id })
        } 
        })

        app.post("/produtos",async(req,res)=>{
            try{
                await ValidaProduto.validaProduto(req.body)
                const inserir = await ProdutosRepository.criarProduto(req.body)
                res.status(201).json(inserir)
            }catch{
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

