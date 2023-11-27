const arac = {
  marka: "Audi",
  model: "Q8",
  motor: 4000,
  colors: ["pink", "black", "gray"],
  power: { fosil: "Benzin", green: "Elektrik" },
};

//? Objelere erisim de 2 yontem vardir.
//? (.) dot notasyonu
console.log(arac.model); //? Q8
console.log(arac.modeller); //? undefined
console.log(arac.colors[2]); //? Gray
console.log(arac.power.green); //? Elektrik

//? Square bracket yontemi
console.log(arac["model"]);
console.log(arac["power"]["fosil"]);

//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak obje erisimlerinde kullanılabilir.
// const key = prompt(
//   "Aracin hangi bilgisini ogrenmek istersiniz, marka, model,motor,vites ?"
// )

// console.log(arac[key])

arac.model = "Q3"; // obje elemanı değiştirme(1)
arac["power"]["fosil"] = "Mazot"; // obje elemanı değiştirme(2)
console.log(arac);

arac.sunroof = true; // objeye yeni eleman ekleme(1)
console.log(arac);

arac["vites"] = 8; // objeye yeni eleman ekleme(2)
console.log(arac);

//* ==========================================
//*          Object Metotlari
//* ==========================================
const dogum = 2000;
const personel = {
  adi: "Ahmet",
  soyadi: "Can",
  dogum: 1988,
  maas: 15000,
  ehliyet: true,
  diller: ["English", "German"],
  // objeye özel fonksyon
  yasHesapla: function () {
    console.log(this); // objenin kendisini yazdırır
    return new Date().getFullYear() - this.dogum; //this objenin içindeki dogum değerini alır
  },
};
console.log(personel.yasHesapla());

// Arrow fonksyonlarda this kelimesi global scope'u (window nesnesini) gösterir. Bu nedenle object fonksiyonlarini tanimlarken
// diger (func. expression veya declaration) yontemlerini kullan.

//********************************************************
//* JSON => Javascript Object Notation. Array içindeki objelerdir. Obje ve/veya arryalerin tırnak içinde yani string halidir json.
// JSON.stringify() objeyi stringleştirir, JSON.parse() stringi json'a dönüştürür
//********************************************************
//? Objeler normalde döngüsel degildir. Ancak for-in for-of gibi donguler ile ozel metotlar yardımıyla itere edilebilirler.
//  Json'ın objelerden üstünlüğü forEach map gibi döngü ve metadların kullanılabilmesidir
const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];
console.log(team[0].name);
team.forEach((t) => console.log(t.job));
const names = team.map((t) => t["name"]);
console.log(names);

const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
  },
};
//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
// console.log(Object.keys(sahislar)); // [ 'sahis1', 'sahis2' ]
// console.log(Object.values(sahislar)); // [{ name: 'Can', surname: 'Canan' },{ name: 'John', surname: 'Sweet' ]
// console.log(Object.entries(sahislar)); // [[ 'sahis1', { name: 'Can', surname: 'Canan' } ], [ 'sahis2', { name: 'John', surname: 'Sweet' } ]]
for (let key of Object.keys(sahislar)) {
  console.log(key);
}
