// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "mehmet", 4, true, 6.6, "Canan", "Yeni", "2.yeni"];
isimler[0] = "emre";
// array const olsa bile arrayin elemanı değiştirilebilir veya yeni eleman eklenebilir
// fakat isimler değişkenine gibi yeni bir atama yapılamaz isimler = "örnek yeni bir atama";
const diller = [
  "Java",
  "C++",
  ["ASM", "Binary"], //? nested array
  "Javascript",
  new Date().getFullYear(), //? JS statement'ı
];

// ! 2.Yöntem (Object Constructor)
const languages = new Array("C++", "java", "PHP");
console.log(languages);
//! 10 elemanlik bos bir Array olusturdu
//! eger constructora parametre olarak tek bir sayi girilirse,
//! construtor bunu o sayida bir bellek alani acilacakmis gibi dusunur.
const numbers1 = new Array(10);
console.log(numbers1);

// ! 3.Yöntem (Array.of())
const numbers2 = Array.of(5);
console.log(numbers2);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================
const meyveler = ["Çilek", "Muz", "Elma"];
//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
const uzunluk = meyveler.push("Kavun");
console.log(meyveler, uzunluk);

//** pop() son elemani siler ve sildigi elemani dondurur.
const removed = meyveler.pop();
console.log(meyveler, removed);

//* shift dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const removedShift = meyveler.shift();
console.log(removedShift);
console.log(meyveler);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const updatedLenght = meyveler.unshift("Kiwi");
console.log(updatedLenght);
console.log(meyveler);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
meyveler.splice(1, 0, "Yaban mersini"); //* dizinin 1 elemaninin devamina Yaban mersini ekle
console.log(meyveler);

meyveler.splice(3, 1, "Mandalina", "Greyfurt"); //* dizinin 3. elemaninin yerine Mandaline ve Geyfurt ekle
console.log(meyveler);

meyveler.splice(3, 1); //? Dizinin 3. elamanini sil.
console.log(meyveler);

//? sort
//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
meyveler.sort();
console.log(meyveler);

const numbersUnsorted = [2, 3, 22, 33, 55, 1, 11, 111, 12];
numbersUnsorted.sort();
console.log(numbersUnsorted);

numbersUnsorted.sort((a, b) => a - b);
console.log(numbersUnsorted);

//* fill()
let veriler = [1, 3, 4, 5];
veriler.fill(0); // tüm elemanları 0 yap
console.log(veriler);

veriler.fill(2, 1); // tüm elemanları 2 yap ama 1. elemandan itibaren
console.log(veriler);

veriler.fill(3, 1, 3); // tüm elemanları 3 yap ama 1. elemandan itibaren ve 3.elemana kadar
console.log(veriler);

//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================
const numbers = [3, 5, 2, "4", "bes", "four", 3, "4", "bes", "1", 3, "bes"];

//* includes()
console.log(numbers.includes("4")); //?true

//* indexOf(), ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.
//* lastIndexOf(); son eslesen indeksi dondurur. Bulunumazsa -1 dondurur.
//* optional olarak kaçıncı indexten itibaren arama yapacağını belirtebilirsin

console.log(numbers.indexOf("bes", 6)); //?8
console.log(numbers.lastIndexOf("bes")); //?11

//? join, dizinin elamanlari birlestirip string'e cevirir. Orj'de değişiklik yapmaz
const joinedNumbers = numbers.join(",");
console.log(joinedNumbers, typeof joinedNumbers);

//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar. Orj'de değişiklik yapmaz
console.log(numbers.toString());

//* slice(start, end) -- end index is optional(exclusive)
let cars = ["BMW", "Mercedes", "Fiat", "Togg"];
const slicedCars = cars.slice(1); //?  ['Mercedes', 'Fiat', 'Togg']
console.log(slicedCars, cars);
console.log(cars.slice(0, 2)); //?['BMW', 'Mercedes']

//* concat() arrayin sonuna elamanlar ekler
const zaman = new Date().toDateString()
console.log(zaman)
const message = ["The weather", "is", "very", "nice"]
const concated = message.concat("hello", zaman, "Merhaba")

console.log(concated)
console.log(concated.reverse().join(" "))
