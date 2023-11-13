console.log("0 ",Boolean(0)); //? false
console.log("-0 ",Boolean(-0)); //? false
console.log("boş string",Boolean("")); //? false
console.log("null ",Boolean(null)); //? false
console.log("undefined ",Boolean(undefined)); //? false
console.log("NaN ",Boolean(NaN)); //? false
console.log("*********************");
console.log(typeof ""); //? string
console.log(typeof null); //? object
console.log(typeof []); //? object - type of an array is object
console.log(typeof undefined); //? undefined
console.log("*********************");
console.log(5 / 0); //? Infinity
console.log(typeof Infinity); //? number
console.log(typeof NaN); //? number
console.log(isNaN(5)); //? false
console.log(isNaN("5")); //? flase
console.log(isNaN("emre")); //? true



console.log(new Date().getFullYear()); // sistem zamanına göre

/* -------------------------------------------------------------------------- */
/*                                var hoisting                                */
/* -------------------------------------------------------------------------- */
var z = 33; //? global degisken
{
  z = 99; //? global degiskene deger aktarildi
}
console.log(z);
//? VAR (GLOBAL SCOPE)
{
  //? var ile bir scope icerinde degisken tanımlandiginda
  //? bu degisken scope'a bagli olmaz (Global)
  var varVar = "ZZ"; //? global degiskene deger aktarildi bu nedenle hata vermez AMA aşağıda görüldüğü gibi function scope'unda durum değişiyor
}
console.log(varVar);

//? LET-COST (BLOCK-SCOPE) Sadece scope icerinde validtir

function setEnd1() {
  end1 = 10;
}
setEnd1();
console.log(end1);
//10 çıktısı veriyor.
/* her hangi bir keyword kullanmadığınızda onu window objesinin elemanı olarak görüyor ve 
window a atıyor o nedenle ilk örnekte end hata vermiyor ve window içerisinde olduğu için her yerden erişim sağlanabiliyor */
// function setEnd2() {
//   var end2 = 10;
// }
// setEnd2();
// console.log(end2);
// //Bu ise HATA veriyor. 
