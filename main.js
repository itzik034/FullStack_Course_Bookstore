const vatCalc = document.getElementById("vatCalc");
const amount = document.getElementById("amount");

amount.addEventListener("input", updateVat);

function updateVat() {
    const value = Number(this.value);
    const vat = value + (value * 0.18);
    vatCalc.innerText = vat;
}