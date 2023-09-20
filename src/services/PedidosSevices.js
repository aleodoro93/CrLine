class ValidacoesPedidos {

    static validaCPF(cpf){
        if (cpf.length >= 3){
            return true
        } else {
            throw new Error("CPF inválido, deve ser apenas números")
        }
    }

    static validaQuantia(quantia){
        if (quantia.length >= 3){
            return true
        } else {
            throw new Error("Quantia inválido, deve ter no mínimo 3 caracteres")
        }
    }

    static validaData(data){
        if (data.length >= 3){
            return true
        } else {
            throw new Error("Data inválida, deve ter no mínimo 3 caracteres")
        }
    }

    static validaPedidos(CPF, quantia, data){
        const ehValido = this.validaCPF(CPF) && this.validaQuantia(quantia) && this.validaData(data)
        if (ehValido) {
            return true;
        } else {
            throw new Error("Dados inválido para o pedido");
        }
    }

}

export default ValidacoesPedidos