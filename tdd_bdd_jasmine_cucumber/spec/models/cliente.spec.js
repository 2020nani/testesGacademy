const { ExpectationFailed } = require("http-errors");
const Cliente =  require('../../models/cliente')

describe('clientes', ()=>{
    beforeEach(async ()=>{

    })
    it('Valida props de um cliente', async ()=>{
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()
    })
    it('Retorna todos', async ()=>{
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(9)
    })
    it('Nome do cliente Upercase', async ()=>{
        let cliente = Cliente.primeiro();
        cliente.nome="danilo"
        expect(cliente.nomeUpercase()).toEqual("DANILO")
    })
    
})