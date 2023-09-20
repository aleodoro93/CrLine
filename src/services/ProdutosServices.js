class ValidaProduto {

    static validaTipoCostura(tipoCostura){
        const costuraIsValid = tipoCostura === "grimorio"||tipoCostura === "copta"||tipoCostura === "moleskine"||tipoCostura === "midori"||tipoCostura === "espiral"
        if (costuraIsValid) {
            return true
        } else{
            throw new Error("Tipo de costura inválido")
        }
        
    }

    static validaTamanhoFolha(tamanhoFolha){
        const folhaIsValid = tamanhoFolha === "A4"||tamanhoFolha === "A5"||tamanhoFolha === "A6"
        if (folhaIsValid) {
            return true
        } else {
            throw new Error("Tamanho de folha inválido")
        }
    }

    static validaTipoFolha(tipoFolha){
        const tipoFolhaIsValid = tipoFolha === "offset"||tipoFolha === "sulfite"||tipoFolha === "reciclado"||tipoFolha === "marfim"||tipoFolha === "sahara"
        if (tipoFolhaIsValid) {
            return true
        } else {
            throw new Error("Tipo de folha inválido")
        }
    }

    static validaGramaturaFolha(gramaturaFolha){
        const gramaturaFolhaisValid = gramaturaFolha === "75"||gramaturaFolha === "90"||gramaturaFolha === "120"||gramaturaFolha === "180"
        if (gramaturaFolhaisValid) {
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
        const tipoPautaIsValid = tipoPauta === "lisa"||tipoPauta === "pautada"||tipoPauta === "quadriculada"||tipoPauta === "pontilhada"
        if (tipoPautaIsValid) {
            return true
        } else {
            throw new Error("Tipo de pauta inválida")
        }
    }

    static validaTemEstoque(temNoEstoque,quantiaNoEstoque){
        const temNoEstoqueIsValid = temNoEstoque && quantiaNoEstoque > 0
        if (temNoEstoqueIsValid) {
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