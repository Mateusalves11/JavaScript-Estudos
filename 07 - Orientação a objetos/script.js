class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo = this.saldo - valor;

        return this.saldo;
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

    class ContaPoupança extends ContaBancaria {
        constructor(agencia, numero){
            super(agencia, numero);
            this.tipo = 'poupança';
        }
}

    class ContaUniversit extends ContaBancaria {
        constructor(agencia, numero){
            super(agencia, numero);
            this.tipo = 'universitaria';
        }

        sacar(valor) {
            if (valor > this._saldo) {
                throw new Error("Saldo insuficiente");
            }else if (valor >= 500) {
                throw new Error("Você ultrapassou o limite de saque");
            }

            this.saldo = this.saldo - valor;
            return this.saldo;
        }
    
}