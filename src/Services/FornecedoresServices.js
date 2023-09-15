

class ValidacoesFornecedores {

    static validaCnpj(cnpj) {
        if (cnpj.length >= 3) {
            return true;
        } else {
            throw new Error("Cnpj inválido, deve ter no mínimo 3 numeros");
        }
    }

    static validaMateriaPrima(MateriaPrima) {
        if (typeof MateriaPrima === 'number' && MateriaPrima >= 0) {
            return true;
        } else {
            throw new Error("Acabou a materia prima");
        }
    }

    static validaProdutos(produtos) {
        if (typeof produtos === 'number' && produtos >= 0) {
            return true;
        } else {
            throw new Error("Não temos esse produto");
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
            throw new Error("");
        }
    }

    
}    

export default ValidacoesFornecedores;