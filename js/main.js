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

//laço de repetição FOR
var count;
for (count=0; count<=5; count++){
    console.log(count);
};

//trabalhando com data
var data = new Date();

//mostrando a data completa
console.log(data);

//mostrando o dia
console.log(data.getDay()+1); //numero dia da semana(exemplo: 6=sexta-feira)
console.log(data.getDate()); //numero dia do mês(exemplo: dia 9)

//mostrando o mês
console.log(data.getMonth()+1);

//mostrando o ano
console.log(data.getFullYear());

//mostranod a hora completa
console.log(data.getHours()+":"+data.getMinutes()+":"+data.getSeconds());

//Funções
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(5, 10));

function setReplace(frase, palavra, novaPalavra){
    return frase.replace(palavra, novaPalavra);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

function clicou(){
    alert("Obrigado por clicar!");
    //imprimir na pagina a mensagem
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar(){
    //abrir link em uma nova aba
    window.open("https://www.google.com.br");
    //abrir link na mesma aba
    window.location.href = "https://www.google.com.br";
}

function trocarTexto(elemento){
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Obrigado por passar o mouse!");
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    //mostrando no console que a pagina foi carregada
    console.log("Pagina carrega!");
}

function funcaoChange(elemento){
    //mostrando no console o valor coletado pelo elemento
    console.log(elemento.value);
}