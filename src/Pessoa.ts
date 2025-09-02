class Pessoa {
    private nome: string;
    private cpf: number;
    private email: string;

    constructor (_nome: string, _cpf: number, _email: string) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.email = _email;
    }

    public getNome() {
        return this.nome;
    }

    public getCpf() {
        return this.cpf;
    }

    public getEmail() {
        return this.email;
    }

    public setNome(_nome: string) {
        this.nome = _nome;
    }

    public setCpf(_cpf: number) {
        this.cpf = _cpf;
    }

    public setEmail(_email: string) {
        this.email = _email;
    }

    public apresentar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }

}

export default Pessoa;