//? promptan gelen deger  string oldugundan sayısal islemlerde kullanmak üzere NUmber'lastirmakta fayda vardir.
//? 1- promptun onune + koymak
//? 2- Number() kullanmak
//  const r = +prompt("Please enter the radius:")
// const r = Number(prompt("Please enter the radius:"))

console.log(typeof String(123))
console.log(typeof Number("234"))
console.log(typeof parseInt("1235678"))
console.log(typeof parseFloat("1235678"))

console.log(Number("1A23")) //? NaN
console.log(parseFloat("33eer123")) //? NaN

