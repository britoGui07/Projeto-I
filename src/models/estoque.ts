import {Carro} from "./carro"

export interface estoqueData{
    id_carro: Carro
    quantidade: number
    localizacao_patio: string
    data_entrada: Date
}
export class Estoque{
    id_estoque: number

    constructor(
        public id_carro: Carro,
        public quantidade: number,
        public localizacao_patio: string,
        public data_entrada: Date
    ){
        this.id_estoque = this.geraID()
    }

    private geraID(): number{
        return Date.now()
    }
}