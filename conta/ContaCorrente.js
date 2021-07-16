import { Conta } from "./conta/Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {    
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas ++;
    } 

    sacar(valor) {
        let taxa = 1.01;
        return this._sacar(valor, taxa); 
    }
    
    
}   