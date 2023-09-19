class ValidaProduto {

    static validaTipoCostura(tipoCostura){
        if (tipoCostura.values === "grimorio"||tipoCostura.values === "copta"||tipoCostura.values === "moleskine"||tipoCostura.values === "midori"||tipoCostura.values === "espiral") {
            return true
        } else{
            throw new Error("Tipo de costura inválido")
        }
        
    }

    static validaTamanhoFolha(tamanhoFolha){
        if (tamanhoFolha.values === "A4"||tamanhoFolha.values === "A5"||tamanhoFolha.values === "A6") {
            return true
        } else {
            throw new Error("Tamanho de folha inválido")
        }
    }

    static validaTipoFolha(tipoFolha){
        if (tipoFolha.values === "offset"||tipoFolha.values === "sulfite"||tipoFolha.values === "reciclado"||tipoFolha.values === "marfim"||tipoFolha.values === "sahara") {
            return true
        } else {
            throw new Error("Tipo de folha inválido")
        }
    }

    static validaGramaturaFolha(gramaturaFolha){
        if (gramaturaFolha === "75"||gramaturaFolha === "90"||gramaturaFolha === "120"||gramaturaFolha === "180") {
            return true
        } else {
            throw new Error("Gramatura inválida")
        }
    }

    static validaTipoCapa(tipoCapa){
        if (tipoCapa.length >= 3) {
            return true
        } else {
            throw new Error("Tipo de capa inválido")
        }
    }
    static validaTipoPauta(tipoPauta){
        if (tipoPauta.values === "lisa"||tipoPauta.values === "pautada"||tipoPauta.values === "quadriculada"||tipoPauta.values === "pontilhada") {
            return true
        } else {
            throw new Error("Tipo de pauta inválida")
        }
    }

    static validaTemEstoque(temNoEstoque,quantiaNoEstoque){
        if (temNoEstoque && quantiaNoEstoque > 0) {
            return "Item em estoque"
    } else {
        throw new Error("Não tem em estoque")
    }
}

static validaProduto(tipoCostura,tamanhoFolha,tipoFolha,gramaturaFolha,tipoCapa,tipoPauta,temNoEstoque,quantiaNoEstoque){
    const valido = this.validaTipoCostura(tipoCostura) && this.validaTamanhoFolha(tamanhoFolha) && this.validaTipoFolha(tipoFolha) && this.validaGramaturaFolha(gramaturaFolha) && this.validaTipoCapa(tipoCapa) && this.validaTipoPauta(tipoPauta) && this.validaTemEstoque(temNoEstoque,quantiaNoEstoque)
    if (valido) {
        return true
    } else {
        throw new Error("Produto inválido")
    }
}

}

export default ValidaProduto