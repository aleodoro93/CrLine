
class ValidacoesClientes {

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

    static validaNome(nome){
        const regexNome = /^[a-zA-ZÀ-ú\s']+$/;
        if (regexNome.test(nome)){
            return true
        } else {
            throw new Error("Nome inválido, apenas letras")
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
        const numeroLimpo = telefone.replace(/[^\d]/g, '');
        const telefoneInt = parseInt(numeroLimpo)
        const regexTelefone = /^[0-9]{10,11}$/

        if (regexTelefone.test(telefoneInt)){
            return true
        } else {
            throw new Error("Telefone inválido")
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