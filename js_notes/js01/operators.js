console.log(5 == "5"); //? true
console.log(5 === "5"); //? false 3 tane ise değer + değişken kontrolü
console.log("5" === "5"); //? true

//**************** TERNARY IF *******************
// ? :
// Tek kosullu ternary - if() ? : ""
const hizmetYili = 2;
maas = 15000;
hizmetYili >= 5 ? (maas *= 1.1) : "";
console.log(maas);
//**************** SHORT-CIRCUIT *******************
//? short-circut yonteminde aradaki operator && ise kosul doğru oldugunda var olan ifadeyi calistirir. Aksi takdirde bir sey calisitirmaz.
//! ampersand
hizmetYili >= 5 && (maas *= 1.1);
//? short-circut yonteminde aradaki operator || ise kosul yanlis oldugunda var olan ifadeyi calistirir. Aksi takdirde bir sey calisitirmaz.
//! pipe
hizmetYili >= 5 || (maas *= 1.1);
console.log(maas);
const gun = "Sali";
switch (gun) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Sali");
    break;
  default:
    console.log("Hafta sonu");
    break;
}
