//OBJETIVO: Fazer uma app que permite contar as pessoas que entram dentro do metro e sempre que 
//submeter o numero de pessaos, esse valor sera guardado numa array para ser utilizado mais tarde.

let counter = 0;
const savedCounts = [];

function increment() {
    counter += 1; 
    document.getElementById("count-el").innerText = counter; //Apresentar numero atualizado
}

function submit() {
    savedCounts.push(counter); //Adicionar os elementos a array (no caso adicionar o inteiro dentro da variavel let counter)
    counter = 0; //Resetar dps de submeter para poder incrementar mais passageiros
    document.getElementById("count-el").innerText = counter; //resetar incremento
    document.getElementById("storedElements").innerText = savedCounts.join(" - "); //Dividir com joins
}