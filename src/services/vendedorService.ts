import * as vendedorRepository from "../repositories/vendedorRepository"
import * as notaFiscalRepository from "../repositories/notaFiscalRepository"
import {vendedorData} from "../models/vendedor"

export function cadastrarNovoVendedor( data: vendedorData){
    const matriculaExistente = vendedorRepository.buscarPorMatricula(data.matricula)
    if(matriculaExistente) throw new Error ("Matricula já cadastrada! Não é permitido o cadastro de dois ou mais vendedores com a mesma matricula")
    
    if(data.comissao_percentual == null) throw new Error ("O campo Comissão precisa ser informado!")
    if(data.comissao_percentual < 0 || data.comissao_percentual > 30) throw new Error ("O campo Comissão deve ser um número entre 0 e 30 (por cento)")
    if(!data.matricula) throw new Error ("A Matrícula é obrigatória!")
     
    return vendedorRepository.cadastrarNovoVendedor(data)
} 
export function atualizarVendedor(id: number, data: vendedorData){
    const vendedor = vendedorRepository.buscarPorID(id)
    if(!vendedor) throw new Error ("Vendedor não encontrado")
    
    if(!data.matricula) throw new Error("A Matrícula é obrigatória!")
    const matriculaExistente = vendedorRepository.buscarPorMatricula(data.matricula)
    if(matriculaExistente && matriculaExistente.id_vendedor !== id) throw new Error("Matrícula já cadastrada!")
    
    if(data.comissao_percentual == null) throw new Error("A comissão é obrigatória")
    if(data.comissao_percentual <0 || data.comissao_percentual > 30) throw new Error ("O campo comissão deve ser um número entre 0 e 30(por cento)")
    
    return vendedorRepository.atualizarVendedor(id,data)
}

export function removerVendedor(id: number){
    const vendedor = vendedorRepository.buscarPorID(id)
    if(!vendedor) throw new Error ("Vendedor não encontrado!")
    
    const comNFVinculada = notaFiscalRepository.buscarPorIdVendedor(id)
    if(comNFVinculada.length > 0) throw new Error ("Não é possível remover um vendedor que tem Nota Fiscal vinculada")

    return vendedorRepository.removerVendedor(id)
}
export function mostrarTodos(){
    return vendedorRepository.mostrarTodos()
}

export function buscarPorID(id: number){
    const vendedor = vendedorRepository.buscarPorID(id)
    if(!vendedor) throw new Error("Vendedor não encontrado")
    return vendedor
}

export function buscarPorMatricula(matricula:string){
    const vendedor = vendedorRepository.buscarPorMatricula(matricula)
    if(!vendedor) throw new Error ("Vendedor não encontrado")
    return vendedor
}

export function buscarPorNome(nome: string){
    const vendedor = vendedorRepository.buscarPorNome(nome)
    if(!vendedor) throw new Error ("Vendedor não encontrado")
    return vendedor
}

export function listarNotasDoVendedor(id: number){
    const vendedor = vendedorRepository.buscarPorID(id)
    if(!vendedor) throw new Error ("Vendedor não encontrado")
    return notaFiscalRepository.buscarPorIdVendedor(id)
}