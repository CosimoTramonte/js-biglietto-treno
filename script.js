//prompt
const kilometres = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt("Quanti anni hai?");

console.log(age, kilometres);

//price calculation
const pricePerKilometre = 0.21;
let prize = kilometres * pricePerKilometre;

console.log(prize)

//conditional statement
const firstPercentage = 0.2;
const secondPercentage = 0.4;

let smallDiscount = (kilometres * pricePerKilometre * firstPercentage);
let bigDiscount = (kilometres * pricePerKilometre * secondPercentage);

let prizeDiscount = 0;

if (age <= 18){
    prizeDiscount = (kilometres * pricePerKilometre) - smallDiscount;
}else if (age >= 65){
    prizeDiscount = (kilometres * pricePerKilometre) - bigDiscount;
}else{
    prizeDiscount = prize;
}

console.log("final prize",prizeDiscount)

let finalPrize = Number(prizeDiscount).toFixed(2);

console.log(finalPrize)

//final output
let output = `
I tuoi chilometri ${kilometres} <br>
La tua età ${age} <br>
Il prezzo del biglietto è di ${finalPrize} $
`

document.getElementById("info").innerHTML = output