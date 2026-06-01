import * as notaFiscalRepository from "../repositories/notaFiscalRepository"
import * as clienteRepository from "../repositories/clienteRepository"
import * as vendedorRepository from "../repositories/vendedorRepository"
import * as carroRepository from "../repositories/carroRepository"
import * as estoqueRepository from "../repositories/estoqueRepository"
import { NotaFiscalData } from "../models/notaFiscal"

export function emitirNota(data: NotaFiscalData){
    const carro = carroRepository.buscarPorID(data.id_carro)
    if(!carro) throw new Error("Carro não encontrado!")
    const cliente = clienteRepository.filtrarPorID(data.id_cliente)
    if(!cliente) throw new Error("Cliente não encontrado!")
    const vendedor = vendedorRepository.buscarPorID(data.id_vendedor)
    if(!vendedor) throw new Error("Vendedor não encontrado!")

    const num_nota = notaFiscalRepository.buscarPeloNumero(data.numero_nota)
    if(num_nota) throw new Error("Esse número já está associado a uma nota!")

    const emEstoque = estoqueRepository.buscarPorIdCarro(data.id_carro)
    if(!emEstoque) throw new Error("Carro não possui registro em estoque!")
    if(emEstoque.quantidade <= 0) throw new Error("Estoque de carro não disponível!")
    emEstoque.quantidade -= 1
    
    const data_emissao = new Date(data.data_emissao)
    if(data_emissao > new Date()) throw new Error("Data de emissão não pode ser no futuro!")

    if(data.valor_total <= 0) throw new Error("Valor total da nota fiscal deve ser positivo e maior que zero!")

    estoqueRepository.atualizarEstoque(emEstoque.id_estoque, {quantidade: emEstoque.quantidade})

    return notaFiscalRepository.novaNota(data)
}

export function mostrarTodos(){
    return notaFiscalRepository.mostrarTodos()
}

export function buscarPorID(id: number){
    const nota = notaFiscalRepository.buscarPorID(id)
    if(!nota) throw new Error("Nota fiscal não encontrada!")
    return nota
}

export function buscarPorIdCliente(id: number){
    const cliente = clienteRepository.filtrarPorID(id)
    if(!cliente) throw new Error("Cliente não encontrado!")
    return notaFiscalRepository.buscarPorIdCliente(id)
}

export function buscarPorIdVendedor(id: number){
    const vendedor = vendedorRepository.buscarPorID(id)
    if(!vendedor) throw new Error("Vendedor não encontrado!")
    return notaFiscalRepository.buscarPorIdVendedor(id)
}