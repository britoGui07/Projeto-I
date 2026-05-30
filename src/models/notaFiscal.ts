export interface NotaFiscalData{
    numero_nota: string
    data_emissao: Date
    valor_total: number
    id_cliente: number
    id_vendedor: number
    id_carro: number
}
export class NotaFiscal{
    id_nota: number
    
    constructor(
        public numero_nota: string,
        public data_emissao: Date,
        public valor_total: number,
        public id_cliente: number,
        public id_vendedor: number,
        public id_carro: number
    ){
        this.id_nota = this.geraID()
    }

    private geraID(): number{
        return Date.now()
    }
}