import {Cliente} from "./cliente"
import {Vendedor} from "./vendedor"
import {Carro} from "./carro"

export class notaFiscal{
    id: number
    numero_nota: string
    data_emissao: Date
    valor_total: number
    id_cliente: Cliente
    id_vendedor: Vendedor
    id_carro: Carro
    
    constructor(numero_nota: string, data_emissao: Date, valor_total: number, id_cliente: Cliente, id_vendedor: Vendedor, id_carro: Carro){

        this.id = this.geraID()
        this.numero_nota = numero_nota
        this.data_emissao = data_emissao
        this.valor_total = valor_total
        this.id_cliente = id_cliente
        this.id_vendedor = id_vendedor
        this.id_carro = id_carro
    }

    private geraID(): number{
        return Date.now()
    }
}