class ValidacoesEstoqueMateriaPrima {
    static validaDescricao(descricao) {
        if (descricao.length >= 3) {
            return true;
        } else {
            throw new Error("Descrição inválida, deve ter no mínimo 3 caracteres");
        }
    }

    static validaQuantia(quantia) {
        if (typeof quantia === 'number' && quantia >= 0) {
            return true;
        } else {
            throw new Error("Quantia inválida, deve ser um número não negativo");
        }
    }

    static validaFornecedores(fornecedores) {
        if (Array.isArray(fornecedores) && fornecedores.length > 0) {
            return true;
        } else {
            throw new Error("Fornecedores inválidos, deve ser uma matriz não vazia");
        }
    }

    static validaMaterial(descricao, quantia, fornecedores) {
        const descricaoValida = this.validaDescricao(descricao);
        const quantiaValida = this.validaQuantia(quantia);
        const fornecedoresValidos = this.validaFornecedores(fornecedores);

        return descricaoValida && quantiaValida && fornecedoresValidos;
    }
}

export default ValidacoesEstoqueMateriaPrima;