

class ValidacoesFornecedores {

    static validaCnpj(cnpj) {
        if (cnpj.length >= 3) {
            return true;
        } else {
            throw new Error("Cnpj inválido, deve ter no mínimo 3 numeros");
        }
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
        if (telefone.length >= 7) {
            return true;
        } else {
            throw new Error("Telefone inválido, deve ter no mínimo 3 numeros");
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
        const valido = this.validaCnpj(cnpj) && this.validaProdutos(produtos) &&
        this.razaoSocial(razaoSocial) && this.validaEndereco(endereco) && this.validaTelefone(telefone) && this.validaEmail(email)
        if(valido){
            return true;
        }else{
            throw new Error("Fornecedor inválido")
        }
    }


}

export default ValidacoesFornecedores;