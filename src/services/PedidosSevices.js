class ValidacoesPedidos {

    static validaIdCliente(idCliente){
        if (idCliente.length >= 3){
            return true
        } else {
            throw new Error("idCliente inválido")
        }
    }

    static validaProdutosPedido(produtosPedido){
        if (produtosPedido.length > 0){
            return true
        } else {
            throw new Error("produtosPedido inválido")
        }
    }

    static validaPedidos(data){
        const ehValido = this.validaIdCliente(data.idCliente) && this.validaProdutosPedido(data.produtosPedido)
        if (ehValido) {
            return true;
        } else {
            throw new Error("Dados inválido para o pedido");
        }
    }

}

export default ValidacoesPedidos