ciftler = [2, 4, 6];
tekler = [1, 3, 5];
const yeniArraySpread = Array.from(ciftler);
console.log(yeniArraySpread, ciftler);
ciftler.push(8);
console.log(yeniArraySpread, ciftler);
yeniArraySpread.push(10);
console.log(yeniArraySpread, ciftler);