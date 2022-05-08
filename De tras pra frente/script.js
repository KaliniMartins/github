var palavra = prompt("Digite uma palavra ou número: ");
var fim = "";

for (var posicao = (palavra.length - 1); posicao >= 0; posicao--) {
    fim += palavra[posicao];
}
alert(fim);