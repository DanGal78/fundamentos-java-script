var filmes = [
{
    titulo: "Vingadores",
    nota: 10,
},
{
    titulo: "O espetacular Homem Aranha",
    nota: 7,
},
{
    titulo: "Senhor dos Aneis",
    nota: 9,   
},
{
    titulo: "",
    nota: 9,   
},

];

console.log("Filmes com notas maior que 7", filmes.filter(function(filme){
    return filme.titulo[0] =="V"
}));

filmes.map(function(item, indice){
    console.log("O titulo do filme:", item.titulo);
console.log("Nota do filme:",item.nota);
});




   
