function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

console.log(`Pirma užduotis`);
const a = rand(1, 10);
const b = rand(1, 10);

if (a < b) {
  console.log(b);
} else if (a > b) {
  console.log(a);
} else {
  console.log(`Skaičiai lygūs`);
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

console.log(`Antra užduotis`);

for (let i = 1; i <= 10; i++) console.log(i);

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

console.log(`Trečia užduotis`);

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

console.log(`Ketvirta užduotis`);

for (let i = 0; i <= 5; i++) {
  const numbersRand = rand(1, 10);
  console.log(numbersRand);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

console.log(`Penkta užduotis`);

let i = 0;
let number5 = "";
while (true) {
  number5 = rand(1, 10);
  console.log(number5);
  if (number5 === 5) break;
  i++;
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

console.log(`Šešta užduotis`);
const array = [];
const length = rand(20, 30);
for (let i = 0; i < length; i++) {
  let figures = rand(10, 30);
  array.push(figures);
}
console.log(array);

let maxValue = 0;
for (const value of array) {
  if (value > maxValue) maxValue = value;
}
console.log("Didžiausia reikšmė elementuose yra:", maxValue);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

console.log(`Septinta užduotis`);

const letters = "ABCD";
const lettersArray = [];
let A = 0;
let B = 0;
let C = 0;
let D = 0;

for (let i = 0; i < 100; i++) {
  const letter = letters[rand(0, letters.length - 1)];
  lettersArray.push(letter);

  if (letter === "A") A++;

  if (letter === "B") B++;

  if (letter === "C") C++;

  if (letter === "D") D++;
}
console.log(lettersArray);
console.log(
  `A raidžių yra ${A},B raidžių yra ${B}, C raidžių yra ${C}, D raidžių yra ${D}.`
);

// 8. Parašyti funkciją - lygineSuma.
// Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

console.log(`Aštunta užduotis`);

function lygineSuma(varOne, varTwo) {
  let sum = 0;
  let isOdd = false;

  if (typeof varOne === "number" && typeof varTwo === "number") {
    sum = varOne + varTwo;
  } else if (Array.isArray(varOne) && Array.isArray(varTwo)) {
    sum = varOne.length + varTwo.length;
  } else {
    return "Kintamųjų tipai nesutampa, sudėtis negalima";
  }

  if (sum % 2 !== 0) {
    isOdd = true;
  }

  if (isOdd) {
    return "Suma nelyginė";
  } else {
    return "Suma: " + sum;
  }
}
const testArray1 = [1, 2, 3];
const testArray2 = [2, 3, 5];
console.log(lygineSuma(testArray1, testArray2));

// 9. Parašyti funkciją pirminisSkaicius.
// Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis
// yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra
// pirminis(pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir
// tik iš vieneto be liekanos.) (10 taškų)

console.log(`Devinta užduotis`);

function pirminisSkaicius(x) {
  if (typeof x !== "number") return "Pateiktas parametras nėra skaičius";
  if (x < 2) return false;
  let divisor = 0;
  for (let i = 2; i <= x; i++) if (x % i === 0) divisor++;
  return divisor === 1;
}
console.log(pirminisSkaicius(10));
console.log(pirminisSkaicius(7));

// 10. Parašyti funkciją telefonoNumeris.
// Funkcija turi priimti vieną kintamąjį - masyvą.
// Masyvo elementai - skaičiai, ilgis - 10.
// Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

console.log(`Dešimta užduotis`);
function telefonoNumeris(phoneNumberArray) {
  const partCode = phoneNumberArray.slice(0, 3).join("");
  const partOne = phoneNumberArray.slice(3, 6).join("");
  const partTwo = phoneNumberArray.slice(6).join("");
  return `(${partCode}) ${partOne}-${partTwo}`;
}

const phoneNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(telefonoNumeris(phoneNumberArray));
