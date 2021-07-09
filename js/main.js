/*
var nome = "Rafael Galleani";
var idade = 29;
alert("Meu primeiro alerta.");
alert("Nome usuário " + nome);
alert("Idade usuário " + idade);

//comentario teste...

// teste soma em alert usando tipagem dinamica
var idade2 = 24;
alert(idade + idade2);

//teste console.log ..
console.log(idade + idade2);

// teste concatenação de frases ..

var frase = "Japão melhor time do Mundo!";
var frase1 = "Brasil campeão das Americas";

console.log(frase + frase1);
console.log(frase.replace("Japão", "Brasil"));

//função colocar toda a frase em caixa alta
console.log(frase.toUpperCase());

//função colocar toda a frase em caixa baixa
console.log(frase.toLowerCase());

//declarando lista
var lista = ["maça", "pera", "laranja"];

//usando item lista
console.log(lista[1]);

//adicionando item a lista
lista.push("uva");

// mostrando lista com novo item
console.log(lista);

//remover ultimo elemento da lista
lista.pop();

//mostrando lista sem o ultimo elemento
console.log(lista);

//mostrar quantos item tem na lista
console.log("quantidade item lista = " + lista.length);

//mostrar item ao contrario do que estão cadastrado na lista
console.log(lista.reverse());

//mostrar lista neste ponto do codigo
console.log(lista);

//transformando a lista em string na saida
console.log(lista.toString());

//mostrar primeiro item da lista
console.log(lista[0]);

//mostrar primeira letra do primeiro item da lista
console.log(lista.toString()[0]);

//mostrar primeira letra do segundo item da lista
console.log(lista[1].toString()[0]);

//mostrar item da lista como string e informar uma separação
console.log(lista.join(" - "));

//utilizando dicionarios
var fruta = {nome: "maça", cor: "vermelha"};

//mostrando cor fruta
console.log(fruta.cor);

//lista dicionarios
var frutas = [{nome:"pera", cor:"verde"}, {nome: "laranja", cor:"laranja"}, {nome: "uva", cor:"roxa"}, {nome:"maça", cor:"vermelha"}];

//mostrar a lista de dicionarios de frutas
console.log(frutas);

//mostrar a cor do item 3 da lista de diconarios de frutas
console.log(frutas[2].cor);

//usando condicionais
var idade = 18;

if (idade >= 18){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
};

//criando pop para consultar idade do usuário antes de liberar o conteúdo
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
};

//dupla condicional
var idade = prompt("Qual sua idade?");

if (idade >= 18 && idade < 60){
    console.log("pode acessar o conteudo");
}else{
    console.log("Não pode acessar o conteúdo");
};

//laço repetição WHILE
var count = 0;

while (count <= 5){
    console.log(count);
    count++;
};
*/

//laço de repetição FOR

var count;
for (count=0; count<=5; count++){
    console.log(count);
};