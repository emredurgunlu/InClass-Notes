class Person {
  sayac = 0;
  #privateField = 50;
  constructor(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;

    Person.sayac++;
  }
  show() {
    return this.#privateField;
  }

  selamVer(x) {
    return `${x} ben ${this.ad}`;
  }
  get soyadim() {
    console.log("getter");
    return this.soyad;
  }
  set soyadim(yeniDeger) {
    this.soyad = yeniDeger;
    console.log("setter");
  }
}

const emre = new Person("emre", "durgunlu");
console.log("Public field is accessible", emre.sayac); // Person.sayac olmaz Person sınıfından bir nesne oluşturmalısın (emre) 
console.log("Private field is inaccessible", emre.privateField); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
console.log(emre.selamVer("merhaba")); // merhaba ben emre
console.log(emre.show()); //50
emre.soyadim = "emrullah"; //setter
console.log(emre.soyadim); //getter // emrullah

class Ogrenci extends Person {
  constructor(ad, soyad, sinif) {
    super(ad, soyad);
    this.sinif = sinif;
  }
}

const kelebek = new Ogrenci("kelebek", "böcek", 2);
console.log(kelebek.sinif); // 2
console.log(kelebek.sayac); // 0

// https://www.tasarimkodlama.com/web-tasarimi/javascript-programlama/javascript-nesne-yonelimli-programlama/
//Prefer Composition instead of extend
const ucmaYetenegiEkle = (nesne) => {
  nesne.uc = () => {
    console.log("Ben de artık uçabiliyorum!");
  };
};
ucmaYetenegiEkle(kelebek);
kelebek.uc();
