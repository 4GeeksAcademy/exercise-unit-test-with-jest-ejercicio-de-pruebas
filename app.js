let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
    let convertirAEuros = dollar / oneEuroIs["USD"]
    let convertirAYen = convertirAEuros * oneEuroIs["JPY"]
    return parseFloat(convertirAYen.toFixed(3));    
}

function fromEuroToDollar(euros){
let convertirADolares = euros * oneEuroIs["USD"]
return parseFloat(convertirADolares.toFixed(3));
}

function fromYenToPound(yen){
  let convertirDeYenAEuros = yen / oneEuroIs["JPY"]
  let convertirALibra = convertirDeYenAEuros * oneEuroIs["GBP"] 
  return parseFloat(convertirALibra.toFixed(3));
} .
module.exports = { fromDollarToYen, fromYenToPound,fromEuroToDollar}

