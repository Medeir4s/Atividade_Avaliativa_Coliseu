export{} from './Coliseu'

import{Equipamentos, itensCabeca, itensCorpo, itensMao} from './Lutador';
import{}from'./Lutador'

export{} from './Jogo'

class Lutador{
    hpPlayer:number;
    mp:number;
    ataque:number;
    defesa:number;
    //Separamento de atributos
    itensCabeca:Equipamento.this.itensDeEquipamento;
    itensCorpo:Equipamento.this.itensDeEquipamento ;
    itensMao:Equipamento.this.itensDeEquipamento;
    //construtor
    constructor(hpPlayer, mp, ataque, defesa){
        this.hpPlayer=number;
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

ataqueEspecial();{
    const ataqueEspecial1 = this.ataque*0.5;
        this.mp -=20;
            return ataqueEspecial1;

    if (this.mp <= 20) {
        console.log('MP Insuficiente');
         return 0
    }
}

receberDano();{
   if (this.hpPlayer -=(ataqueSofridor - defesa)){
   }

   if (this.defesa > exibirAtaque){  
    return this.hpPlayer += (ataqueSofridor - defesa)
   }
}

Atacar(this.itensCabeca,this.itensCorpo, this.itensMao);{
    itensCabeca+itensCorpo+itensMao;}


Defender(this.itensCabeca,this.itensCorpo, this.itensMao);{
    itensCabeca+itensCorpo+itensMao;
}

tomarPocaoHP();{
    if(this.hpPlayer * 0.25){
        console.log(`HP em: ${this.hpPlayer}`)
    }
}

tomarPocaoMP();{
    if(this.mp * 0.25){
        console.log(`MP em: ${this.hpPlayer}`)
    }
}