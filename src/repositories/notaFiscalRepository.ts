import { NotaFiscal, NotaFiscalData } from "../models/notaFiscal";

let notas: NotaFiscal[] = []

export function novaNota(data: NotaFiscalData): NotaFiscal{
    const novaNota = new NotaFiscal(data.numero_nota, data.data_emissao, data.valor_total, data.id_cliente, data.id_vendedor, data.id_carro)
    notas.push(novaNota)

    return novaNota
}

export function mostrarTodos(): NotaFiscal[]{
    return notas
}

export function buscarPorID(id: number): NotaFiscal | undefined{
    return notas.find(n => n.id_nota === id)
}