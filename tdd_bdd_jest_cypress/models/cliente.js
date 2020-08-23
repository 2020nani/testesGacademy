module.exports= class Cliente{
    constructor(_id=0, _nome="", _telefone=""){
        this.id=_id;
        this.nome=_nome;
        this.telefone = _telefone;
    }
    nomeUpercase(){
     return this.nome.toUpperCase()
    }

    static primeiro(){
        return new Cliente()
    }
   
    static todos(){
        return[
            new Cliente(1, "hernani", "38145832"),
            new Cliente(2, "hernani2", "38145832"),
            new Cliente(3, "hernani3", "38145832"),
            new Cliente(4, "hernani4", "38145832"),
            new Cliente(5, "hernani5", "38145832"),
            new Cliente(6, "hernani6", "38145832"),
            new Cliente(7, "hernani7", "38145832"),
            new Cliente(8, "hernani8", "38145832"),
            new Cliente(9, "hernani9", "38145832"),
            new Cliente(10, "hernani10", "38145832"),
        ]
    }
}