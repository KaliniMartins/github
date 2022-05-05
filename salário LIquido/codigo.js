var salarioBruto = parseFloat(prompt("Digite seu salário bruto: "));

//calculo do inss//
var inss = 0.0;

if (salarioBruto <= 1045) {
    var inss = salarioBruto * (7.5 / 100)

} else if (salarioBruto <= 2089.60) {
    var inss = salarioBruto * (9 / 100)

} else if (salarioBruto <= 3134.40) {
    var inss = salarioBruto * (12 / 100)

} else if (salarioBruto <= 6101.06) {
    var inss = salarioBruto * (14 / 100)

} else (salarioBruto > 6101.06); {
    var inss = salarioBruto - 713.10
}



//calculo ir//
var ir = 0.0;

if (salarioBruto > 4664.68) {
    var ir = salarioBruto * (27.5 / 100)

} else if (salarioBruto >= 3751.06) {
    var ir = salarioBruto * (22.5 / 100)

} else if (salarioBruto >= 2826.66) {
    var ir = salarioBruto * (15 / 100)

} else if (salarioBruto >= 1903.99) {
    var ir = salarioBruto * (7.5 / 100)
}

alert("Seu salário Bruto é de: " + salarioBruto + "\nSeu total de descontos de INSS é de: " + inss + "\nDe IR: " + ir + "\nSeu salário final: " + salarioBruto - inss - ir)
