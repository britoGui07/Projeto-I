export class Vendedor{
    id_vendedor: number
    nome: string
    matricula: string
    comissao_percentual: number

    constructor(nome: string, matricula: string, comissao_percentual: number) {
        this.id_vendedor = this.geraID()
        this.nome = nome
        this.matricula = matricula
        this.comissao_percentual = comissao_percentual
    }
    private geraID(): number {
        return Date.now()
    }
}