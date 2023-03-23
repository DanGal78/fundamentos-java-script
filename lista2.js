var carros = ["Gol", "Ford Ka","Hilux","Ferrari","Ford Fiesta", "Cruse", "Prisma","Doblo","EcoSport"];

//Filtra intens com base em um critério e retorna uma lista//

console.log("Começa com F", carros.filter(function(value){
    return value[0] == "F" || value[0] =="f";

}));
console.log("Carros que contenham mais de 6 letras:", carros.filter(function(value){
    return value.length >= 6;
    
}))

// Retorna a primeira ocorrencia de um critério de busca//

console.log("")
console.log("Obtemum carro da ford: ", carros.find(function(value){
    var carroMarca = value.split(" ")[0]
    return carroMarca == "Ford";
}));

//Ordenar uma lista com base em um critério//

console.log("Ordena uma lista em ordem Alfabética: ", [2,8,5,1,0,4,3,6,7].sort(function(a, b){
    return a - b;
}) )