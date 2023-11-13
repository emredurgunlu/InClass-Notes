//? default parametre ile bos bırakılan parametre yerine bir deger atanmis olunur. fonksiyon yukarı taşınıyor - hoisted
yazdir();
yazdir("merhaba", "emre");
function yazdir(lang = "Hello", name = "noname") {
  console.log(`${lang} ${name}`);
}

/* -------------------------------------------------------------------------- */
/*                               Arrow Function                               */
/* -------------------------------------------------------------------------- */
// Arrow Function hoisted olmaz
// yaz2(); //error
const yaz2 = () => console.log("Hello JS");
yaz2();

const kareAl = (num) => num * num;
console.log("Kare:", kareAl(4));

//? arrow fonksiyonlarda eger fonksiyon birden fazla islem icerirse
//? o zaman süslü parantez kullanilmasi gerekmektedir.
//? Süslü parantez kullanildiginda arrow fonksiyonlarinin otomatik
//? returning ozelligi kaybolour. Bu sebeple eger donus isteniyorsa
//? return kullanilmalidir.
const hesapla = (x, y) => {
  const toplam = x + y;
  const carpim = x * y;
  const sonuc = carpim / toplam;
  return sonuc;
};
console.log("SONUC=", hesapla(4, 2));

/* -------------------------------------------------------------------------- */
/*                             function expression                            */
/* -------------------------------------------------------------------------- */
const topla = function (a, b) {
  return a + b;
};
console.log("Toplam:", topla(3, 7));

//recursive ile yapılanı döngü ile de yapabilirsin. recursive performans açısından kötüdür
