//* ------- YENI BIR ELEMENT OLUSTURMA 1. yöntem(CreateElement)------
//? 1- yeni bir element olustur
const myPar = document.createElement("p"); // p elementi oluşturur, içi henüz boş ve DOM'a henüz eklenmemiş.

//? 2- Eger text tabanlı bir element ise text dugumunu olustur
const text = document.createTextNode("P elementi"); // DOM için text oluştur

// e.target.closest(".product").remove(); ilgili elementi domdan kaldırır

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
myPar.appendChild(text); // DOM için oluşturduğun texti oluşturduğun p elemanına bağla.

//?4- Yeni olusan elementi DOM tree'ye ekle.
const addItemSection = document.querySelector(".add-item");
addItemSection.appendChild(myPar); //? add-item section'ın içine ve (her zaman)en alta p elementini ve yazısını ekler

//! Element.before()  ve Element.after() appenChild gibi aslında bir elementi DOM Tree'ye baglar ama child değil sibling bağlama olarak.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/before
addItemSection.before(myPar); //? add-item section'ın hemen üzerine myPar'i baglar. Bu satır çalışınca bi üstteki appenChild iptal oldu,
// yani aynı elementi iki kere bağlayamazsın, önceki bağlama iptal olur

//? React icerigine sahip olan li elementinin devamına yeni elemnti ekle
// const reactLi = document.querySelector("ul li:nth-child(4)")
// reactLi.after(myPar)

//* ------- YENI BIR ELEMENT OLUSTURMA 2. yöntem(InnerHTML) Pure JS için güvenli değil------

const ul = document.querySelector("ul");

// += yaparsan var olanı silmeden üstüne ekler. Backtick kullanmak daha mantıklı
ul.innerHTML += `<li id='deneme'>C++</li>
  <li class="fw-bold">Java</li>
  <li>Ruby</li>
  <li>Asembly</li>
`;
/* -------------------------------------------------------------------------- */
/*               ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------              */
/* -------------------------------------------------------------------------- */
//? 1) Yontem
myPar.id = "paragraf"; // myPar sonuç olarak bir element ve dolayısı ile bir obje, bu nedenle yeni key(id) ve value(paragraf) ekledik.
myPar.className = "red center";
myPar.name = "par";
myPar.type = "button";

//? 2) Yontem (setAttribute)
myPar.setAttribute("id", "deneme");
myPar.setAttribute("type", "button");
myPar.setAttribute("class", "bg-warning border border-danger border-3"); // eğer zaten bir classı varsa onu silip üstüne yazar

//? 3) Yontem (classList) öncekini silmez üstüne ekler
myPar.classList.add("text-center");
myPar.classList.remove("text-center");
if(myPar.classList.contains("text-center")){}

console.log(myPar.classList.contains("bg-warning"));

if (myPar.classList.contains("border-danger")) {
  myPar.classList.remove("border-danger");
  myPar.classList.add("border-primary");
}

//? toggle metodu belitrilen class eger yok ise bu class'ı ekler
//? eger belirtilen class var ise bu class'ı kaldırır. Yani yukardaki if bloğunu yapar
myPar.classList.toggle("text-danger");
