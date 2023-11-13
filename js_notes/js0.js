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
const languages = new Array("C++", "java", "PHP")
console.log(languages)
//! 10 elemanlik bos bir Array olusturdu
//! eger constructora parametre olarak tek bir sayi girilirse,
//! construtor bunu o sayida bir bellek alani acilacakmis gibi dusunur.
const numbers1 = new Array(10)
console.log(numbers1)

// ! 3.Yöntem (Array.of())
const numbers2 = Array.of(5)
console.log(numbers2)
