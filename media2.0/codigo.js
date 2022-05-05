var qtd = parseInt(prompt("Digite a qauntdade de notas que você tirou: "));
var notas = [];

while (notas.length < qtd) {
    var nota = parseFloat(prompt("Digite as notas: "));
    notas.push(nota)
}

var soma = 0;

for (var contador = 0; contador < notas.length; contador++) {
    soma += notas[contador];
}

var resultado = soma / notas.length

if (resultado >= 7) {
    alert("Parabéns, você foi aporvado! \n=)")

} else {
    alert("Você foi reprovado =( \nEstude mais!")
}