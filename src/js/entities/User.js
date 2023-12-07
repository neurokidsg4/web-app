
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
    estado;
    cidade;

    constructor(nome, email, atuacao, genero, celular, nascimento, senha, sobreMin, cep, estado, cidade) {
        this.nome = nome,
        this.email = email,
        this.atuacao = atuacao,
        this.genero = genero,
        this.celular = celular,
        this.nascimento = nascimento,
        this.senha = senha,
        this.sobreMin = sobreMin,
        this.cep = cep,
        this.estado = estado,
        this.cidade = cidade
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

    get estado() {
        return this.estado;
    }

    get cidade() {
        return this.cidade;
    }
}