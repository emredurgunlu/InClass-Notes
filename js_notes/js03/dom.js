// DOM html dokümanları için c++ dilinde yazılmış bir ara birim, api'dır.
// Html elemanlarının okunması, değiştirilmesi, eklenmesi ve silinmesi gibi
// işlemlerin nasıl yapılacağını belirleyen standarttır. Bir obje modelidir.

//*===========================================
//*            GETELEMENTBYID() en hızlısıdır. eğer id'si varsa bunu kullan
//*===========================================
const header = document.getElementById("header");
console.log("getElementById('header')", header);
// Stil verme 3 şekilde:
// 1. ayrı ayrı
// header.style.backgroundColor = "green"
// header.style.color = "white"

// 2. css gibi. bu daha iyi
// header.style =
//   "background-color:green; color:white; font-size:20px; font-family:Tahoma";

// 3.'sü en iyi yöntem. css'de yaptığıın sınıf içinde olsun stil. Js'den bu sınıfı aktif veya deaktif et.

//* Text elemanin icerigini okuma
const h2 = document.getElementById("add-new-item");
console.log(h2);
// eğer text ise textContent ve innerText kullan çünkü bunlar pure string olarak hızlı işler
console.log(h2.textContent); //? ADD NEW ITEM
console.log(h2.innerText); //? ADD NEW ITEM
console.log(h2.innerHTML); //? ADD NEW ITEM innerHTML Vanilla JS kullanılıyorsa güvenlik olarak tehlikeli. (React için tehlikeli değil)

//* Text elemanin icerigini degistirme
h2.textContent = "ADD";
h2.innerText = "ADD ITEM";
h2.innerHTML = "<p>Deneme</p>"; // farklı olarak burası p elementi ekler içinde ise Deneme texti ekler

//* Input elemanlarinin degeri value property'si ile degisir
//* Input elemanlarinin içindeki text de value ile okunur
document.getElementById("btn").value = "Submit";

//*===========================================
//*          GETELEMENTSBYTAGNAME() yani eleman adı ile seçim yapar. HTML Collection döndürür
//*===========================================

const lists = document.getElementsByTagName("li");
//! HTML Collection DOM'un sundugu bir veri yapısıdır.
//! Array-Like
console.log(lists); //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

console.log("SIZE:", lists.length);

//? FOR donguleri itere edilebilir
for (let li of lists) {
  console.log(li.textContent);
}
//? HTML Collection yapısın Arraya cevrilebilir.
const listArray = [...lists]; //? Spread ile array e cevrildi.
listArray.forEach((li) => (li.style.color = "green"));
console.log(listArray);
listArray[0].style.color = "red";

//? Array.from() metodu ile de Array'e cevrim yapılabilir.
Array.from(lists).forEach((li) => (li.style.backgroundColor = "yellow"));

const sections = document.getElementsByTagName("section");
console.log(sections); //? HTMLCollection(2) [section.add-item, section.item-list]
sections[0].style.color = "blue"; // HTML coolection'un ilk sectionına verir(section.add-item)
sections[1].style.color = "green"; // HTML coolection'un ikinci sectionına verir(section.item-lists)

//*===========================================
//*          GETELEMENTSBYCLASSNAME() HTML Collection döndürür
//*===========================================

const myLists = document.getElementsByClassName("list");
console.log(myLists); //?HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
// ! Query Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer.

//? id almak için (#)
console.log(document.querySelector("#header"));

//? class almak için (.)
console.log(document.querySelector(".item-list"));

//? tag almak için ()
console.log(document.querySelector("h3"));

//? CSS selector
console.log(document.querySelector("section.add-item #btn"));

console.log(document.querySelector("ul li:nth-child(4)").innerText); // "React" yazdırır

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
const itemLists = document.querySelectorAll("section.item-list li");
console.log(itemLists); //? NodeList(5) [li.list, li.list, li.list, li.list, li.list]
//NodeListi arraye çevirmek için: [...itemLists].map().reduce()

//* querySelectorAll bir nodelist dondurur. Nodelist dahali olarak forEach metmodunu barindirir. Ama istenirse spread veya Array.from() ile yine Array'e donusum yapilabilir.

itemLists.forEach((li) => console.log(li));

//? alternatif iterasyon
for (let li of itemLists) {
  console.log(li);
}
