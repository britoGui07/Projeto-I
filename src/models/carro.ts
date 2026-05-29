export interface carroData{
    marca: string
    modelo: string
    ano: number
    placa: string
    preco: number
    cor: string
}

export class Carro{
    id_carro: number

    constructor(
        public marca: string, 
        public modelo: string, 
        public ano: number, 
        public placa: string, 
        public preco: number, 
        public cor: string
    ){
        this.id_carro = this.geraId()
    }

    private geraId(): number{
        return Date.now()
    }
}