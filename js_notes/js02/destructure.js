const insan = {
  kimlikNo: "1234567890",
  adi6: "Ahmet",
  soyadi6: "Can",
  meslek: "Mimar",
  maas: 30000,
};
let { adi6, soyadi6, kimlikNo, maas } = insan;
console.log(adi6);

//? NESTED
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};
//? 1. yontem
const { kisi1, kisi2 } = insanlar; //? Leve1 dest.
console.log(kisi1);
const { kimlikNo: kisi1Kimlik, adi: kisi1Adi, soyadi: kisi1Soyadi } = kisi1; //?Level2
console.log(kisi1Kimlik);

//?2. yontem
const {
  kisi1: { soyadi, adi },
} = insanlar; //? nested destr.
console.log(soyadi);

// ****************************************************************** //
//* function'un dondurdugu obje dogrudan dest. yapilabilir
const kisiOku = function () {
  return {
    no: "1234567890",
    isim: "Ahmet",
    soyisim: "Can",
    is: "Kasap",
    dilSayisi: 2,
  };
};

let { no, isim, soyisim, dilSayisi } = kisiOku();
console.log("dilSayisi", dilSayisi);

//? Parameter olarak objenin ve destr. kullanimi
const data = {
  id: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
};

const productPrintDestr = (data) => {
  const { brand, product, stock } = data;
  console.log(`${brand}-${product}: ${stock}`);
};

//? Alternatif destr (Havada veya Yolda)
const productPrintDestrV2 = ({ brand, product, stock }) => {
  console.log(`${brand}-${product}: ${stock}`);
};
productPrintDestr(data);
productPrintDestrV2(data);

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================
const people = ["Ali", "Veli", "Can", "Canan"]
//? Array destr. sıra önemlidir.
const [p1, p2, , p4] = people
console.log(p4)