const real = 4.95;
const euro = 0.91;
const libra = 0.78;
const iene = 145.46;
const dolar = 1;

const select = document.querySelector('.coin1');
const input = document.querySelector('.input-number');
const select2 = document.querySelector('.coin2')
const result = document.querySelector('.result');

let vazio = input.value;


function calcular() {
    const valorInput = parseFloat(input.value);
    const moedaDe = select.value;
    const moedaPara = select2.value;

    let valor = 0;

    if (input.value == vazio) {
        alert("Preencha um valor válido maior que zero.");
    } else {
        if (moedaDe === "real") {
            valor = valorInput / real; // Inverter a conversão aqui
        } else if (moedaDe === "euro") {
            valor = valorInput / euro;
        } else if (moedaDe === "libra") {
            valor = valorInput / libra;
        } else if (moedaDe === "iene") {
            valor = valorInput / iene;
        } else if (moedaDe === "dolar") {
            valor = valorInput / dolar;
        }

        let resultado = 0;
        if (moedaPara === "real") {
            resultado = "R$ " + (valor * real).toFixed(2); // Multiplicar a conversão aqui
        } else if (moedaPara === "dolar") {
            resultado = "US$ " + (valor * dolar).toFixed(2);
        } else if (moedaPara === "euro") {
            resultado = "€ " + (valor * euro).toFixed(2);
        } else if (moedaPara === "libra") {
            resultado = "£ " + (valor * libra).toFixed(2);
        } else if (moedaPara === "iene") {
            resultado = "¥ " + (valor * iene).toFixed(4);
        }
        result.innerHTML = resultado;
    }
}
