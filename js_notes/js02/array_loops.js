const notlar = [20, 55, 100, 89, 32];
let toplam = 0;
for (let i = 0; i < notlar.length; i++) { //*********************************
  toplam += notlar[i];
}
console.log("TOPLAM:", toplam);

const ellidenKucukler = [];
const ellidenBuyukler = [];
for (let i in notlar) { //*********************************
  if (notlar[i] < 50) { 
    ellidenKucukler.push(notlar[i]);
  } else {
    ellidenBuyukler.push(notlar[i]);
  }
}

console.log(ellidenBuyukler);
console.log(ellidenKucukler);

const ellidenKucukler1 = []
const ellidenBuyukler1 = []

for (let not of notlar) { //*********************************
  not < 50 ? ellidenKucukler1.push(not) : ellidenBuyukler1.push(not)
}

console.log(ellidenBuyukler1)
console.log(ellidenKucukler1)

//* =======================================
//*           FOREACH METHOD
//* =======================================
const prices = [250, 150, 300, 500]

prices.forEach((p) => console.log(p * 1.1))

//? 2 parametreli forEach
prices.forEach((price, index) => console.log("DEGER:", price, "SIRA:", index))

//? 3 paramtreli foreach
//? callback func'da satir sayisi birden fazla oldugu icin suslu kullandik.
//? foreach metodu void function'dır yani bir sey dondurmez.
prices.forEach((p, i, arr) => {
  if (p < 270) {
    arr[i] = p * 1.1
  }
})
console.log(prices)

//* =======================================
//*            MAP METHOD - ARRAY RETURN EDER
//* =======================================
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const upperCasedNames = names.map((n) => n.toLocaleUpperCase())
console.log(upperCasedNames)


//* =======================================
//*             FILTER METHOD - ARRAY RETURN EDER
//* =======================================
const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
//? Maasi 8000 - 10000 arasinda olanlari ayri bir diziye saklayalim
const aradakiMaaslar = maaslar.filter((m) => m >= 8000 && m <= 10000)
console.log(aradakiMaaslar)

//* =======================================
//*             REDUCE METHOD
//* =======================================
const numbers = [2, 3, 4, 5]

const multiply = numbers.reduce((acc, val) => acc * val, 1) // kümülatif çarpmaya 1 değeri ile başla
console.log(multiply)

const sumOfNumbers = numbers.reduce((sum, sal) => sum + sal, 0) // kümülatif toplamaya 0 değeri ile başla
console.log("TOTAL:", sumOfNumbers)

const sumOfNumbers1 = numbers.reduce((sum, sal, i) => { // i index numarası
  console.log(`${i} - ${sum + sal}`)
  return sum + sal
}, 0)
console.log("TOTAL:", sumOfSalaries1)

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 44, 78, 89, 25]
const check = ages.every((age) => age >= 18)

check ? console.log("All ages are over 18") : console.log("Some are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? true

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1




//? filter, map, reduce
const zamliMaasToplami = salaries
  .filter((s) => s >= 9000 && s < 15000)
  .map((s) => s * 1.5)
  .reduce((sum, salary) => sum + salary)

console.log("Zamlı Maas Toplami:", zamliMaasToplami)