import {Carro, carroData} from "../models/carro"

let carros: Carro[] = []

export function novoCarro(data: carroData): Carro{
    const novoCarro = new Carro(data.marca, data.modelo, data.ano, data.placa, data.preco, data.cor)
    carros.push(novoCarro)
    return novoCarro
}

export function mostrarTodos(): Carro[]{
    return carros
}

export function buscarPorID(id: number): Carro | undefined{
    return carros.find(c => c.id_carro === id)
}

export function buscarPelaPlaca(placa: string): Carro | undefined{
    return carros.find(c => c.placa === placa)
}

export function atualizarCarro(id: number, data: carroData): Carro | undefined{
    const carro = carros.find(c => c.id_carro === id)
    if(!carro) return undefined

    if(data.marca) carro.marca = data.marca
    if(data.modelo) carro.modelo = data.modelo
    if(data.ano) carro.ano = data.ano
    if(data.placa) carro.placa = data.placa
    if(data.preco) carro.preco = data.preco
    if(data.cor) carro.cor = data.cor
    
    return carro
}

export function removerCarro(id: number): boolean{
    const pos = carros.findIndex(c => c.id_carro === id)
    if(pos === -1) return false

    carros.splice(pos, 1)
    return true
}