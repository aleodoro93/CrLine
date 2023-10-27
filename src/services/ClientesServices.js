
class ValidacoesClientes {

    static validaNome(nome){
        const regexNome = /^[a-zA-ZÀ-ú\s']+$/;
        if (regexNome.test(nome)){
            return true
        } else {
            throw new Error("Nome inválido, apenas letras")
        }
    }

    static validaSobrenome(sobrenome){
        const regexNome = /^[a-zA-ZÀ-ú\s']+$/;
        if (regexNome.test(sobrenome)){
            return true
        } else {
            throw new Error("Sobrenome inválido, apenas letras")
        }
    }

    static validaEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regexEmail.test(email)) {
            return true;
        } else {
            throw new Error("E-mail inválido");
        }
    }

    static validaSenha(senha) {
        if (senha > 8) {
            return true;
        } else {
            throw new Error("Senha inválida");
        }
    }
    
    static validaCliente(cliente){
        const ehValido = this.validaNome(cliente.nome) && this.validaSobrenome(cliente.sobrenome) && this.validaEmail(cliente.email) && this.validaSenha(cliente.senha)
        if (ehValido) {
            return true;
        } else {
            throw new Error("Dados inválido para o cliente");
        }
    }

}

export default ValidacoesClientes