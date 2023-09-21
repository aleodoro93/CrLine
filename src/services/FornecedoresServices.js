
class ValidacoesFornecedores {

    static validaCnpj(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');
        
        if (cnpj === '' || cnpj.length !== 14){
            throw new Error("CNPJ inválido, quantia inválida de digitos")
        }
        
        if (/^(\d)\1+$/.test(cnpj)) {
            throw new Error("CNPJ inválido, digitos repetidos")
        }
        
        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        const digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }
        
        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        
        if (resultado != digitos.charAt(0)) {
            throw new Error("CNPJ inválido")
        }
        
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) pos = 9;
        }
        
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        
        if (resultado != digitos.charAt(1)) {
            throw new Error("CNPJ inválido")
        }
        
        return true;
    }

    static validaDescricaoProdutos(produtos) {
        if (produtos.length >= 3) {
            return true;
        } else {
            throw new Error("Descrição do Produto inválido, deve ter no mínimo 3 caracter");
        }
    }

    static validaRazaoSocial(razaoSocial) {
        if (razaoSocial.length >= 3) {
            return true;
        } else {
            throw new Error("Razão Social inválido, deve ter no mínimo 3 letras");
        }
    }
    static validaEndereco(endereco) {
        if (endereco.length >= 3) {
            return true;
        } else {
            throw new Error("Endereço inválido, deve ter no mínimo 3 caracteres");
        }
    }

    static validaTelefone(telefone) {
        const numeroLimpo = telefone.replace(/[^\d]/g, '');
        const telefoneInt = parseInt(numeroLimpo);
        const regexTelefone = /^[0-9]{10,11}$/;

        if (regexTelefone.test(telefoneInt)){
            return true;
        } else {
            throw new Error("Telefone inválido");
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

    static validaFornecedores(cnpj, produtos, razaoSocial, endereco, telefone, email){
        const valido = this.validaCnpj(cnpj) && this.validaDescricaoProdutos(produtos) &&
        this.validaRazaoSocial(razaoSocial) && this.validaEndereco(endereco) && this.validaTelefone(telefone) && this.validaEmail(email)
        if(valido){
            return true;
        }else{
            throw new Error("Fornecedor inválido")
        }
    }


}

export default ValidacoesFornecedores;