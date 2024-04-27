import{Equipamentos, itensCabeca, itensCorpo, itensMao} from './Lutador';
import{}from'./Lutador'

class Lutador{
    healthPoints:number;
    mp:number;
    ataque:number;
    defesa:number;
    //Separamento de atributos
    itensCabeca:Equipamento.this.itensDeEquipamento;
    itensCorpa:Equipamento.this.itensDeEquipamento ;
    itensMao:Equipamento.this.itensDeEquipamento;
    //construtor
    constructor(healthPoints, mp, ataque, defesa){
        this.healthPoints=number;
        this.mp=Number;
        this.ataque=Number;
        this.defesa=Number;
    }
    constructor(itensCabeca, itensCorpo, itensMao, Equipamento){
        this.itensCabeca=Equipamento;
        this.itensCorpo=Equipamento;
        this.itensMao=Equipamento;
    }
}

let itenscabeca = new Equipamento.this.itensDeEquipamento('Espada Decapitadora', 12, 18);
let itenscorpo = new Equipamento.this.itensDeEquipamento('Foice Do Eden', 28, 10);
let itensmao = new Equipamento.this.itensDeEquipamento('Escudo Encoracado', 10, 25);

let guilherme = new new Equipamento.this.itensDeEquipamento(itensCabeca, itensCorpo, itensMao);


exibirInfoLutador();{
    console.log(this.Lutador)
}

exibirAtaque(ataque);{
    return this.ataque
}
//Não entendi essa alternativa da questão 3.ii

ataqueEspecial(){
    const ataqueEspecial1 = this.ataque*0.5;
    this.mp -=20;
    return ataqueEspecial1;

    if (this.mp <= 20) {
        console.log('MP Insuficiente');
    }
}