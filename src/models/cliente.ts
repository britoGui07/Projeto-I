class cliente {
    id_cliente: number
    nome: string
    cpf: string
    email?: string
    cidade?: string

    constructor(nome: string, cpf: string, telefone: string, email: string, cidade: string) {
        this.id_cliente = this.geraID()
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.cidade = cidade
    }
    private geraID(): number {
        return Date.now()
    }
}