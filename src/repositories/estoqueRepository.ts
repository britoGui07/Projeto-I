import {Estoque, estoqueData} from "../models/estoque"

let estoques: Estoque[] = []

export function mostrarTodos(): Estoque[]{
    return estoques
}

export function buscarPorID(id: number): Estoque | undefined{
    return estoques.find(e => e.id_estoque === id)
}

export function buscarPorIdCarro(id: number): Estoque | undefined{
    return estoques.find(e => e.id_carro.id_carro === id)
}

export function novoRegistroEstoque(data: estoqueData): Estoque{
    const novoEstoque = new Estoque(data.id_carro, data.quantidade, data.localizacao_patio, data.data_entrada)
    estoques.push(novoEstoque)
    return novoEstoque
}

export function atualizarEstoque(id: number, data: estoqueData): Estoque | undefined{
    const estoque = estoques.find(e => e.id_estoque === id)
    if(!estoque) return undefined

    if(data.quantidade) estoque.quantidade = data.quantidade
    if(data.localizacao_patio) estoque.localizacao_patio = data.localizacao_patio
    
    return estoque
}

export function removerRegistroEstoque(id: number): boolean{
    const pos = estoques.findIndex(e => e.id_estoque === id)
    if(pos === -1) return false

    estoques.splice(pos, 1)
    return true
}