import {Vendedor, vendedorData} from "../models/vendedor"

let vendedores: Vendedor[] = []

export function cadastrarNovoVendedor(data: vendedorData): Vendedor{
    const novoVendedor = new Vendedor( data.nome, data.matricula, data.comissao_percentual)
    vendedores.push(novoVendedor)
    return novoVendedor
}

export function mostrarTodos(): Vendedor[]{
    return vendedores
}

export function buscarPorID(id: number): Vendedor | undefined{
    return vendedores.find(v => v.id_vendedor === id)
}

export function buscarPorNome(nome:string): Vendedor | undefined{
    return vendedores.find(v => v.nome === nome)
}

export function buscarPorMatricula(matricula:string): Vendedor | undefined{
    return vendedores.find(v => v.matricula === matricula)
}
export function atualizarVendedor(id: number, data: vendedorData): Vendedor | undefined{
    const vendedor = vendedores.find(v => v.id_vendedor === id)
    if(!vendedor) return undefined

    if(data.nome) vendedor.nome = data.nome
    if(data.matricula) vendedor.matricula = data.matricula
    if(data.comissao_percentual) vendedor.comissao_percentual= data.comissao_percentual
    
    return vendedor
}

export function removerVendedor(id: number): boolean{
    const pos = vendedores.findIndex(v => v.id_vendedor === id)
    if (pos === -1) return false

    vendedores.splice(pos,1)
    return true
}

