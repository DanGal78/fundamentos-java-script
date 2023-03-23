function olamundo() {
    console.log("Olá mundo");

}
olamundo();

function bomdia(nome){
    return (`Bom dia, ${nome}!`);

}
console.log(bomdia("Daniel"));
var _bomdia = bomdia("Fulano");
console.log(_bomdia);

function soma(valor1, valor2){
    return valor1 + valor2;
}

var resultado = soma(null, null);
console.log(resultado);

var pessoa ={
nome: "Daniel Galdino",
idade: 18,
altura: 1.7,
genero: "Mas",
peso: 88.8,
acordado: true,
dormir: function(){
    pessoa.acordado =true;
},
aniversario: function(){
    pessoa.idade+=1
}

}
console.log(pessoa);
pessoa.dormir();
pessoa.aniversario();
console.log(pessoa);

(function(){
    console.log("Fui executada")
})()

var funcaoAleatoria = function(){
    console.log("Buuum", Math.random());
}
funcaoAleatoria();