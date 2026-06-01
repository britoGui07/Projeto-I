import {Request, Response} from "express"
import * as carroService from "../services/carroService"

export function criarCarro(req: Request, res: Response){
    try{
        let data = req.body
        const carro = carroService.cadastrarCarro(data)
        res.status(201).json(carro)
    }catch(e: unknown){
        const msg = (e as Error).message
        if(msg.includes("já cadastrada")) return res.status(409).json({status: "error", message: msg})
        res.status(400).json({status: "error", message: msg})
    }
}

export function listarTodosCarros(req: Request, res: Response){
    try{
        const carros = carroService.mostrarTodos()
        res.status(200).json(carros)
    }catch(e: unknown){
        res.status(500).json({status: "error", message: (e as Error).message})
    }
}

export function buscarCarro(req: Request, res: Response){
    try{
        let id = Number(req.params.id)
        const carro = carroService.buscarPorID(id)
        res.status(200).json(carro)
    }catch(e: unknown){
        res.status(404).json({status: "error", message: (e as Error).message})
    }
}

export function buscarCarrosDisponiveis(req: Request, res: Response){
    try{
        const disponiveis = carroService.mostrarCarrosDisponiveis()
        res.status(200).json(disponiveis)
    }catch(e: unknown){
        res.status(500).json({status: "error", message: (e as Error).message})
    }
}

export function atualizarCarro(req: Request, res: Response){
    try{
        let id = Number(req.params.id)
        let data = req.body
        const carro = carroService.atualizarCarro(id, data)
        res.status(200).json(carro)
    }catch(e: unknown){
        const msg = (e as Error).message
        if(msg.includes("não encontrado")) return res.status(404).json({status: "error", message: msg})
        if(msg.includes("já cadastrada")) return res.status(409).json({status: "error", message: msg})
        res.status(400).json({status: "error", message: msg})
    }
}

export function removerCarro(req: Request, res: Response){
    try{
        let id = Number(req.params.id)
        const carro = carroService.removerCarro(id)
        res.status(200).json({message: "Carro removido com sucesso!"})
    }catch(e: unknown){
        const msg = (e as Error).message
        if(msg.includes("não encontrado")) return res.status(404).json({status: "error", message: msg})
        res.status(422).json({status: "error", message: (e as Error).message})
    }
}