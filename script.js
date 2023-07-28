function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

console.log(`Pirma užduotis`);
const a = 9;
const b = 10;

if (a < b) {
  console.log(b);
} else if (a > b) {
  console.log(a);
} else {
  console.log(`Skaičiai lygūs`);
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

console.log(`Antra užduotis`);

for (let input = 1; input <= 10; input++) {
  console.log(input);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

console.log(`Trečia užduotis`);

for (let input = 0; input <= 10; input++) {
  if (input % 2 === 0) console.log(input);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

console.log(`Ketvirta užduotis`);

for (let i = 0; i <= 5; i++) {
  const numbersRand = rand(1, 10);
  console.log(numbersRand);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

console.log(`Penkta užduotis`);

// let i = 1;
// let numbersOneToTen = 0;

// while (i < 10) {
//   numbersOneToTen = (1, 10);
//   if (numbersOneToTen == 5) {
//     break;
//   }
//   numbersOneToTen++;
// }

// console.log(numbersOneToTen);

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

console.log(`Šešta užduotis`);
const array = [];
const length = rand(20, 30);
for (let i = 0; i < length; i++) {
  let figures = rand(10, 30);
  array.push(figures);
}
console.log(array);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

console.log(`Septinta užduotis`);

let maxValue = 0;
for (const value of array) {
  if (value > maxValue) maxValue = value;
}
console.log("Didžiausia reikšmė elementuose yra:", maxValue);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)
