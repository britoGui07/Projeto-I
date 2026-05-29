import {Cliente} from "./cliente"
import {Vendedor} from "./vendedor"
import {Carro} from "./carro"

export interface NotaFiscalData{
    numero_nota: string
    data_emissao: Date
    valor_total: number
    id_cliente: Cliente
    id_vendedor: Vendedor
    id_carro: Carro
}
export class NotaFiscal{
    id_nota: number
    
    constructor(
        public numero_nota: string,
        public data_emissao: Date,
        public valor_total: number,
        public id_cliente: Cliente,
        public id_vendedor: Vendedor,
        public id_carro: Carro
    ){
        this.id_nota = this.geraID()
    }

    private geraID(): number{
        return Date.now()
    }
}