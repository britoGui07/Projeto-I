import express from "express"
 
import * as carroController from "./controllers/carroController"
import * as clienteController from "./controllers/clienteController"
import * as estoqueController from "./controllers/estoqueController"
import * as vendedorController from "./controllers/vendedorController"
import * as notaFiscalController from "./controllers/notaFiscalController"

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

app.get("/clientes", clienteController.listarTodosClientes)
app.get("/clientes/notas/:id", clienteController.listarNotasDoCliente)
app.get("/clientes/:id", clienteController.buscarCliente)
app.post("/clientes", clienteController.criarCliente)
app.put("/clientes/:id", clienteController.atualizarCliente)
app.delete("/clientes/:id", clienteController.removerCliente)

app.get("/vendedores", vendedorController.listarTodosVendedores)
app.get("/vendedores/notas/:id", vendedorController.listarNotasDoVendedor)
app.get("/vendedores/:id", vendedorController.buscarVendedor)
app.post("/vendedores", vendedorController.criarVendedor)
app.put("/vendedores/:id", vendedorController.atualizarVendedor)
app.delete("/vendedores/:id", vendedorController.removerVendedor)

app.get("/carros", carroController.listarTodosCarros)
app.get("/carros/disponiveis", carroController.buscarCarrosDisponiveis)
app.get("/carros/:id", carroController.buscarCarro)
app.post("/carros", carroController.criarCarro)
app.put("/carros/:id", carroController.atualizarCarro)
app.delete("/carros/:id", carroController.removerCarro)

app.get("/estoque", estoqueController.listarTodosRegistros)
app.get("/estoque/carro/:id", estoqueController.buscarPorIdCarro)
app.get("/estoque/:id", estoqueController.buscarPorID)
app.post("/estoque", estoqueController.criarEstoque)
app.put("/estoque/:id", estoqueController.atualizarEstoque)
app.delete("/estoque/:id", estoqueController.removerRegistroEstoque)

app.get("/notas", notaFiscalController.listarTodasNotas)
app.get("/notas/:id", notaFiscalController.buscarNota)
app.post("/notas", notaFiscalController.emitirNota)

app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`))