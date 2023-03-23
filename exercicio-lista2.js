var frutas = ["Maça", "Melão","Melancia","Banana","Goiaba", "Pera", "Amexa","Kiwi"];

function filtroInicial(fruta){
    return fruta[0] == "M"
}


console.log("Fruta que começa com M", frutas.filter(function(value){
    return value[0] == "M" 
}));

console.log("Frutas com mais de 4 letras:", frutas.filter(function(value){
    return value.length > 4;
    
}));

console.log("Frutas que começa com G: ", frutas.find(function(value){
    var frutaG = value[0];
    return frutaG == "G";
}));

console.log("Ordena uma lista em ordem Alfabética: ", frutas.sort()    
);