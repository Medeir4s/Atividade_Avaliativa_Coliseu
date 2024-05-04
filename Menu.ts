export * from './jogo'

class menu{
    itensMenu:itensMenu[];
}
//Aqui é onde vão escolha os Itens
    let imprimirMenu = prompt('Escolha um número:');{

    if (imprimirMenu == "1"){
    console.log('Atacar!');}

    else if (imprimirMenu == '2'){
    console.log('Ataque Especial');}

    else if (imprimirMenu == '3'){
    console.log('Tomar porção de Cura de HP');}

    else if (imprimirMenu == '4'){
    console.log('Tomar poção que restaura MP');}

    else if (imprimirMenu == '5'){
    console.log('Defender');}
    
    return true;
}


class itensMenu{
    opcao:string
    textoDaOpcao:string
}