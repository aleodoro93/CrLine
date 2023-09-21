class ValidacoesPedidos {

    static validaCPF(cpf){
        cpf = cpf.replace(/[^\d]/g, '');

        if (cpf.length !== 11) {
            throw new Error("CPF inválido, quantia inválida de digitos")
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            throw new Error("CPF inválido, digitos repetidos")
        }

        let soma1 = 0;
        let soma2 = 0;
        for (let i = 0; i < 9; i++) {
            soma1 += parseInt(cpf.charAt(i)) * (10 - i);
            soma2 += parseInt(cpf.charAt(i)) * (11 - i);
        }
        soma2 += parseInt(cpf.charAt(9)) * 2;

        const digito1 = (soma1 * 10) % 11;
        const digito2 = (soma2 * 10) % 11;

        if (digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10))) {
            return true;
        } else {
            throw new Error("CPF inválido")
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