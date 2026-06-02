# Projeto I — API REST Concessionária de Veículos

**Disciplina:** Programação Web  
**Professor:** Dr. Anisio Silva

---

## Integrantes

|Nome|
|---|
|Anna Lívia Campos|
|Guilherme Andrade Brito|

---

## Descrição

Desenvolvimento de uma API Rest para uma Concessionária de Veículos fazendo a utilização das tecnologias aprendidas até o momento durante o curso. Testes para as rotas foram realizados através do Postman.

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express

---

## Como executar
**1. Clonar o Repositório**
`git clone https://github.com/britoGui07/Projeto-I.git`

**2. Instalar as dependências:**
`npm install typescript @types/node express @types/express`

**3. Iniciar o servidor:**
1. `npm run build`
2. `npm start`

O servidor estará disponível em `http://localhost:3000`

---

## Endpoints disponíveis

### Clientes `/clientes`
| Método | Rota | Descrição |
|---|---|---|
| GET | /clientes | Lista todos os clientes |
| GET | /clientes/:id | Busca cliente por id |
| GET | /clientes/notas/:id | Lista notas fiscais do cliente |
| POST | /clientes | Cadastra novo cliente |
| PUT | /clientes/:id | Atualiza cliente |
| DELETE | /clientes/:id | Remove cliente |

### Vendedores `/vendedores`
| Método | Rota | Descrição |
|---|---|---|
| GET | /vendedores | Lista todos os vendedores |
| GET | /vendedores/:id | Busca vendedor por id |
| GET | /vendedores/notas/:id | Lista notas fiscais do vendedor |
| POST | /vendedores | Cadastra novo vendedor |
| PUT | /vendedores/:id | Atualiza vendedor |
| DELETE | /vendedores/:id | Remove vendedor |

### Carros `/carros`
| Método | Rota | Descrição |
|---|---|---|
| GET | /carros | Lista todos os carros |
| GET | /carros/disponiveis | Lista carros com estoque disponível |
| GET | /carros/:id | Busca carro por id |
| POST | /carros | Cadastra novo carro |
| PUT | /carros/:id | Atualiza carro |
| DELETE | /carros/:id | Remove carro |

### Estoque `/estoque`
| Método | Rota | Descrição |
|---|---|---|
| GET | /estoque | Lista todos os registros de estoque |
| GET | /estoque/:id | Busca registro por id |
| GET | /estoque/carro/:id | Busca estoque de um carro |
| POST | /estoque | Cria novo registro de estoque |
| PUT | /estoque/:id | Atualiza registro de estoque |
| DELETE | /estoque/:id | Remove registro de estoque |

### Notas Fiscais `/notas`
| Método | Rota | Descrição |
|---|---|---|
| GET | /notas | Lista todas as notas fiscais |
| GET | /notas/:id | Busca nota fiscal por id |
| POST | /notas | Emite nova nota fiscal |