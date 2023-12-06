
export class User{

    nome;
    email;
    atuacao;
    genero;
    celular;
    nascimento;
    senha;
    sobreMin;
    cep;

    constructor(nome, email, atuacao, genero, celular, nascimento, senha, sobreMin, cep) {
        this.nome = nome,
        this.email = email,
        this.atuacao = atuacao,
        this.genero = genero,
        this.celular = celular,
        this.nascimento = nascimento,
        this.senha = senha,
        this.sobreMin = sobreMin,
        this.cep = cep
    }

    get nome() {
        return this.nome;
    }

    get email() {
        return this.email;
    }

    get atuacao() {
        return this.atuacao;
    }

    get genero() {
        return this.genero;
    }

    get celular() {
        return this.celular;
    }

    get nascimento() {
        return this.nascimento;
    }

    get senha() {
        return this.senha;
    }

    get sobreMin() {
        return this.sobreMin;
    }

    get cep() {
        return this.cep;
    }
}