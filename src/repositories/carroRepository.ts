import {Carro} from "../models/carro"

let carros: Carro[] = []

export function novoCarro(data: Omit<Carro, 'id_carro'> ): Carro{
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

export function atualizarCarro(id: number, data: Partial<Omit<Carro, 'id_carro'>>): Carro | undefined{
    const pos_carro = carros.findIndex(c => c.id_carro === id)

    return carros[pos_carro]
}