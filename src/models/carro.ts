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

    constructor(marca: string, modelo: string, ano: number, placa: string, preco: number, cor: string){
        this.id_carro = this.geraId()
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.placa = placa
        this.preco = preco
        this.cor = cor
    }

    private geraID(): number{
        return Date.now()
    }
}