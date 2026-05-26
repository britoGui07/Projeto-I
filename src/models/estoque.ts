import {Carro} from "./carro"

export class Estoque{
    id_estoque: number
    id_carro: Carro
    quantidade: number
    localizacao_patio: string
    data_entrada: Date

    constructor(id_carro: Carro, quantidade: number, localizacao_patio: string, data_entrada: Date){
        this.id_estoque = this.geraID()
        this.id_carro = id_carro
        this.quantidade = quantidade
        this.localizacao_patio = localizacao_patio
        this.data_entrada = data_entrada
    }

    private geraID(): number{
        return Date.now()
    }
}