const ciftler = [2, 4, 6];
const tekler = [1, 3, 5];

const yeniSayilar = ciftler; //? Sig Kopyalama (Derin Kopyalama)

console.log(yeniSayilar, ciftler);
ciftler.push(8);
console.log(yeniSayilar, ciftler);
