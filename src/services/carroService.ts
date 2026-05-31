import * as carroRepository from "../repositories/carroRepository"
import * as estoqueRepository from "../repositories/estoqueRepository"
import * as notaFiscalRepository from "../repositories/notaFiscalRepository"
import {carroData} from "../models/carro"

export function cadastrarCarro(data: carroData){
    const placaExistente = carroRepository.buscarPelaPlaca(data.placa)
    if(placaExistente) throw new Error("Placa já cadastrada! Não é permitido cadastrar dois carros com a mesma placa")

    if(data.ano < 1950 || data.ano > new Date().getFullYear()+1) throw new Error("Ano inválido!")
    if(data.preco <= 0) throw new Error("Preço deve ser um valor positivo maior que zero!")
    
    
    const carro = carroRepository.cadastrarNovoCarro(data)
    return carro
}

export function atualizarCarro(id: number, data: carroData){
    const carro = carroRepository.buscarPorID(id)
    if(!carro) throw new Error("Carro não encontrado")

    if(data.ano < 1950 || data.ano > new Date().getFullYear()+1) throw new Error("Obrigatório informar um ano válido!")
    
    if(!data.placa) throw new Error("Obrigratório informar placa!")
    const placaExistente = carroRepository.buscarPelaPlaca(data.placa)
    if(placaExistente && placaExistente.id_carro !== id) throw new Error("Placa já cadastrada!")
    
    if(data.preco <= 0) throw new Error("Obrigatório informar um preço positivo maior que zero!")
    
    return carroRepository.atualizarCarro(id, data)
}

export function removerCarro(id: number){
    const carro = carroRepository.buscarPorID(id)
    if(!carro) throw new Error("Carro não encontrado!")
    
    const emEstoque = estoqueRepository.buscarPorIdCarro(id)
    if(emEstoque) throw new Error("Não é possível remover um carro que possui registro em estoque!")
    
    const comNota = notaFiscalRepository.buscarPorIdCarro(id)
    if(comNota) throw new Error ("Não é possível remover um carro que está vinculado a uma nota fiscal!")
    
    return carroRepository.removerCarro(id)
}

export function mostrarTodos(){
    return carroRepository.mostrarTodos()
}

export function buscarPorID(id: number){
    const carro = carroRepository.buscarPorID(id)
    if(!carro) throw new Error("Carro não encontrado!")
    return carro
}

export function buscarPelaPlaca(placa: string){
    const carro = carroRepository.buscarPelaPlaca(placa)
    if(!carro) throw new Error("Carro não encontrado!")
    return carro
}

export function mostrarCarrosDisponiveis(){
    const disponiveis = estoqueRepository.mostrarCarrosDisponiveis()
    return disponiveis.map(id => carroRepository.buscarPorID(id))
}