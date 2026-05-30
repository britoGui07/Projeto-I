import {Cliente, clienteData } from "../models/cliente"

let clientes: Cliente [] = []

export function cadastrarNovoCliente(data: clienteData): Cliente{
    const novoCliente = new Cliente(data.nome, data.cpf, data.telefone, data.email, data.cidade)
    clientes.push(novoCliente)
    return novoCliente
}

export function filtrarPorID(id: number): Cliente | undefined{
    return clientes.find(cl => cl.id_cliente === id)
}

export function filtrarPorNome(nome:string): Cliente | undefined{
    return clientes.find(cl=> cl.nome === nome)
}

export function filtrarPorCPF(cpf:string): Cliente | undefined{
    return clientes.find(cl=> cl.cpf === cpf)
}

export function atualizarCliente(id:number, data: clienteData): Cliente| undefined{
    const cliente = clientes.find( cl=> cl.id_cliente === id)
    if(!cliente) return undefined

    if(data.nome) cliente.nome = data.nome
    if(data.cpf) cliente.cpf = data.cpf
    if(data.telefone) cliente.telefone = data.telefone
    if(data.email) cliente.email = data.email
    if(data.cidade) cliente.cidade = data.cidade

    return cliente
}

export function removerCliente(id:number): boolean{
    const pos = clientes.findIndex(cl=> cl.id_cliente === id)
    if(pos === -1) return false

    clientes.splice(pos, 1)
    return true
}

export function mostrarTodos(): Cliente[]{
    return clientes
}