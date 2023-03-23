var nome = 'Daniel Galdino';
var idade = 44;
var altura = 1.70;
var genero = 'Masc';
var peso = 85;
var acordado = true;
var coresFavoritas = ["Roxo", "Preto","Azul"];

var pessoa = {
    nome: "Daniel Galdino",
    idade: 18,
    altura: 1.7,
    genero: "Mas",
    peso: 88.8,
    acordado: true,
    coresFavoritas: coresFavoritas
};

pessoa.musicaFavorita =("Henrique e Juliano");


console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade );
console.log("Altura: " + pessoa.altura);
console.log("Gênero: " + pessoa.genero);
console.log("Peso: " + pessoa.peso);
console.log("Peso: " + pessoa.peso);
console.log("Acordado: " + pessoa.acordado);
console.log("Musica Favorita: " , pessoa.musicaFavorita);
console.log("Sua cor Favorita: ", coresFavoritas[2]);


console.log("Calculadora de IMC");
var IMC = pessoa.peso / pessoa.altura ** 2;
pessoa['imc'] = IMC;
console.log("Olá" + pessoa.nome);
console.log("Seu IMC é: " + IMC );

