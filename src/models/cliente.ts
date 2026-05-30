export interface clienteData {
    nome: string
    cpf: string
    telefone:string
    email?: string
    cidade?: string
}
    export class Cliente {
         id_cliente: number

         constructor(
            public nome: string,
            public cpf: string,
            public telefone:string,
            public email?: string,
            public cidade?: string
        ) {
            this.id_cliente = this.geraID()
        }

    private geraID(): number {
        return Date.now()
    }
}