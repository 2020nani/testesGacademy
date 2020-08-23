const { ExpectationFailed } = require("http-errors");
const Cliente =  require('../../models/cliente')

describe('clientes', ()=>{
    beforeEach(async ()=>{

    })
    test('Valida props de um cliente', async ()=>{
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()
    })
    test('Retorna todos', async ()=>{
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(9)
    })
    test('Nome do cliente Upercase', async ()=>{
        let cliente = Cliente.primeiro();
        cliente.nome="danilo"
        expect(cliente.nomeUpercase()).toEqual("DANILO")
    })
    test('Nome testado com indexOf', async ()=>{
        let cliente = Cliente.primeiro();
        cliente.nome="danilo"
        expect(cliente.nome.indexOf("o") !=-1).toEqual(true)
    })
    
    
})