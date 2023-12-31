//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const htmlLi = document.querySelector("ul li:nth-child(1)")

console.log(htmlLi.parentNode.parentNode.parentNode) //? main
console.log(htmlLi.parentElement.parentElement.parentElement) //?main

//? closest() metodu root yonundeki ilk uygun olan parent'i secer.
console.log(htmlLi.closest("section")) //? en yakın section parent'ı bulur

console.log(htmlLi.closest("main").querySelector("#add-new-item").textContent) //? en yakın main'i bul icersindeki adnew-item idli elementi sec
// Ortak atayı bul, oradan ilgili elementi seç. Bubling yaparken bu kullanılabilir
 
//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild
console.log(htmlLi.firstElementChild) //? Null elemanı baz alır, içindeki texti saymaz
console.log(htmlLi.firstChild) //? HTML sadece elemanı değil, içindeki texte de önem verir
console.log(htmlLi.lastChild) //? HTML

//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling
console.log(
  htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText
)
