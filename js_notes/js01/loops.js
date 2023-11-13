for (let i = 1; i <= 10; i++) {
  //console.log(i) //? 12345678910
}

//?break, continue
for (let i = 0; i <= 10; i++) {
    if (i < 5) {
      continue; // altını çalıştırmadan döngü başına döner
    }
    if (i === 8) {
      break; // döngüden çıkar
    }
    console.log(i);
  }

// Döngü sayısı belli değilse while kullanılabilir
// Örneğin sayı tahmin oyununda kaçıncı seferde bilineceği belli değil

// let j = 0
// do {
//   console.log(j)
//   j++
// } while (j < 10)

// let i = 0
// while (i < 10) {
//   console.log(i)
//   i++
// }