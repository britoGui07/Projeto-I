import {Request, Response} from "express"
import * as notaFiscalService from "../services/notaFiscalService"

export function emitirNota(req: Request, res: Response){
    try{
        const data = req.body
        const nota = notaFiscalService.emitirNota(data)
        res.status(201).json(nota)
    }catch(e: unknown){
        const msg = (e as Error).message
        if(msg.includes("não encontrado")) return res.status(404).json({status: "error", message: msg})
        if(msg.includes("já está associado")) return res.status(409).json({status: "error", message: msg})
        res.status(422).json({status: "error", message: msg})
    }
}

export function listarTodasNotas(req: Request, res: Response){
    try{
        const notas = notaFiscalService.mostrarTodos()
        res.status(200).json(notas)
    }catch(e: unknown){
        res.status(500).json({status: "error", message: (e as Error).message})
    }
}

export function buscarNota(req: Request, res: Response){
    try{
        const id = Number(req.params.id)
        const nota = notaFiscalService.buscarPorID(id)
        res.status(200).json(nota)
    }catch(e: unknown){
        res.status(404).json({status: "error", message: (e as Error).message})
    }
}