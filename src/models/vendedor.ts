export interface vendedorData{
    nome: string
    matricula: string
    comissao_percentual: number
}

export class Vendedor{
    id_vendedor: number
   
    constructor(
        public nome: string,
        public matricula: string,
        public comissao_percentual: number,
    ) {
        this.id_vendedor = this.geraID()
    }
    private geraID(): number {
        return Date.now()
    }
}