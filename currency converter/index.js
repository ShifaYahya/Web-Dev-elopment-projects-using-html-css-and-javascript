const currencyFirstEl = document.querySelector(".currency-first");
const currencySecondEl = document.querySelector(".currency-second");
const worthFirstEl = document.querySelector(".worth-first");
const worthSecondEl = document.querySelector(".worth-second");
const exchangeRateEl = document.querySelector(".exchange-rate ")
updateRate()

async function updateRate(){

const data =  await fetch(`https://v6.exchangerate-api.com/v6/0deace2e4f8c024125c75632/latest/${currencyFirstEl.value}`).then((response)=> response.json());

const rate = data.conversion_rates[currencySecondEl.value]

exchangeRateEl.innerText = `1 ${currencyFirstEl.value } =  ${rate + " " + currencySecondEl.value}`
worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)

}




currencyFirstEl.addEventListener("change", updateRate)
currencySecondEl.addEventListener("change", updateRate)
worthFirstEl.addEventListener("input", updateRate)