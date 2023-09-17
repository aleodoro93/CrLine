class ValidacoesClientes {

    static validaCPF(cpf){
        if (cpf.length >= 3){
            return true
        } else {
            throw new Error("CPF inválido, deve ser apenas números")
        }
    }

    static validaNome(nome){
        if (nome.length >= 3){
            return true
        } else {
            throw new Error("Nome inválido, deve ter no mínimo 3 caracteres")
        }
    }

    static validaEndereco(endereco){
        if (endereco.length >= 3){
            return true
        } else {
            throw new Error("Endereço inválido, deve ter no mínimo 3 caracteres")
        }
    }

    static validaTelefone(telefone){
        const telefoneInt = parseInt(telefone)
        if (typeof telefone == "string" && telefone.length > 9 && telefone == telefoneInt){
            return true
        } else {
            throw new Error("Telefone inválido, deve ter no mínimo 9 caracteres")
        }
    }

    static validaEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            return true;
        } else {
            throw new Error("E-mail inválido");
        }
    }
    
    static validaCliente(CPF, nome, endereco, telefone, email){
        const ehValido = this.validaCPF(CPF) && this.validaNome(nome) && this.validaEndereco(endereco) && this.validaTelefone(telefone) && this.validaEmail(email)
        if (ehValido) {
            return true;
        } else {
            throw new Error("Dados inválido para o cliente");
        }
    }

}

export default ValidacoesClientes