var inicio = prompt("Digite um número inicial: ");
var fim = prompt("Digite um número final: ");

if (inicio < fim)
    for (var contador = inicio; contador <= fim; contador++) {
        console.log(contador);
    } else {
    for (var contador = inicio; contador >= fim; contador--) {
        console.log(contador);
    }
}