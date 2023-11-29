//* ==============================================
//*  REST (...) Cesitli kullanim alanlari vardir:
//* =============================================

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.
//?REST: Array
const araclar = ["ATV", "Kamyonet", "TIR", "Kamyon", "Araba"];
const [a1, a2, ...geriKalanAraclar] = araclar;
console.log(geriKalanAraclar); //? ["Kamyonet", "TIR", "Kamyon"]

//?REST: Object
const veri = {
  id: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
};

const { id, product, ...productStock } = veri;
console.log(productStock);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.
const sumAll = (...numbers) => {
  // console.log(numbers)
  return numbers.reduce((acc, val) => acc + val);
};
console.log("SUM-ALL:", sumAll(3, 4, 5));

//* =============================================
//*  SPREAD (...)
//* =============================================
//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"];
const karaAracları = ["araba", "bisiklet", "marti"];
const tasitlarFlat = [...karaAracları, "hoverCraft", "gemi", ...ucanAraclar];
console.log(tasitlarFlat);

const slogan = "Reinvent ";
const sloganArray = [...slogan];
console.log(sloganArray);

const sayilar = [2, 4, 5, 13, 56, 23];
console.log(Math.max(...sayilar));

/* --------------------- Sığ kopyalama (shallow copying) -------------------- */
/* --------------------- Derin kopyalama (deep copying) --------------------- */
let ciftler = [2, 4, 6];

const yeniSayilar = ciftler; //? Bir diziyi diğerine atar ise Sığ Kopyalama olur. Ve herhangi birinde yapılan değişiklikten ikisi birden etkilenir.

console.log(yeniSayilar, ciftler);
ciftler.push(8);
console.log(yeniSayilar, ciftler);
yeniSayilar.push(10);
console.log(yeniSayilar, ciftler);
console.log("**************************");

//? Kopyalama Spread ile yapilirsa derin kopyalama olur ve birbirinden etkilenmezler
//? (ISTISNA: Eger dizide nesting (içiçe veri) varsa onlar icin sig kopyalama gibi calisir.)
//? Tamamen Deep Kopyalama icin JSON.stringify() - JSON.parse() veya structuredClone()
//  https://www.builder.io/blog/structured-clone
// https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
ciftler = [2, 4, 6];
tekler = [1, 3, 5];
const yeniArraySpread = [...ciftler];
// veya const yeniArraySpread = Array.from(ciftler);
console.log(yeniArraySpread, ciftler);
ciftler.push(8);
console.log(yeniArraySpread, ciftler);
yeniArraySpread.push(10);
console.log(yeniArraySpread, ciftler);

// let ciftler = [2, 4, 6];
// function aa([...yeniSayilar]) { // derin kopyalama 
//   console.log(yeniSayilar, ciftler);
//   ciftler.push(8);
//   console.log(yeniSayilar, ciftler);
//   yeniSayilar.push(10);
//   console.log(yeniSayilar, ciftler);
// }
// aa(ciftler);

// function aa(yeniSayilar) { // sığ kopyalama 
//   console.log(yeniSayilar, ciftler);
//   ciftler.push(8);
//   console.log(yeniSayilar, ciftler);
//   yeniSayilar.push(10);
//   console.log(yeniSayilar, ciftler);
// }
// aa(ciftler);
