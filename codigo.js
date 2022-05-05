var salarioBruto = parseFloat(prompt("Digite seu salário bruto: "));

//calculo do inss//
var INSS = 0.0;
if (salarioBruto <= 1045) {
    var inss = salarioBruto * (7, 5 / 100);

} else if (salarioBruto <= 2089, 60) {
    var inss = salarioBruto * (9 / 100);

} else if (salarioBruto <= 3134, 40); {
    var inss = salarioBruto * (12 / 100);

}   