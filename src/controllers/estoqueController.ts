import {Request, Response} from "express"
import * as estoqueService from "../services/estoqueService"

export function criarEstoque(req: Request, res: Response){
    try{
        let data = req.body
        const estoque = estoqueService.novoRegistroEstoque(data)
        res.status(201).json(estoque)
    }catch(e: unknown){
        const msg = (e as Error).message
        if(msg.includes("já registrado")) return res.status(409).json({status: "error", message: msg})
        res.status(400).json({status: "error", message: msg})
    }
}

export function listarTodosRegistros(req: Request, res: Response){
    try{
        const estoques = estoqueService.mostrarTodos()
        res.status(200).json(estoques)
    }catch(e: unknown){
        res.status(500).json({status: "error", message: (e as Error).message})
    }
}

export function buscarPorID(req: Request, res: Response){
    try{
        let id = Number(req.params.id)
        const estoque = estoqueService.buscarPorID(id)
        res.status(200).json(estoque)
    }catch(e: unknown){
        res.status(404).json({status: "error", message: (e as Error).message})
    }
}

export function buscarPorIdCarro(req: Request, res: Response){
    try{
        let id = Number(req.params.id)
        const estoque = estoqueService.buscarPorIdCarro(id)
        res.status(200).json(estoque)
    }catch(e: unknown){
        res.status(404).json({status: "error", message: (e as Error).message})
    }
}

export function atualizarEstoque(req: Request, res: Response){
    try{
        let id = Number(req.params.id)
        let data = req.body
        const estoque = estoqueService.atualizarEstoque(id, data)
        res.status(200).json(estoque)
    }catch(e: unknown){
        const msg = (e as Error).message
        if(msg.includes("não encontrado")) return res.status(404).json({status: "error", message: msg})
        res.status(400).json({status: "error", message: msg})
    }
}

export function removerRegistroEstoque(req: Request, res: Response){
    try{
        let id = Number(req.params.id)
        const estoque = estoqueService.removerRegistroEstoque(id)
        res.status(200).json({message: "Registro de estoque removido com sucesso!"})
    }catch(e: unknown){
        const msg = (e as Error).message
        if(msg.includes("não encontrado")) return res.status(404).json({status: "error", message: msg})
        res.status(422).json({status: "error", message: msg})
    }
}