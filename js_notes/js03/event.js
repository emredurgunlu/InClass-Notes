// 4 farkılı yöntemle yapılabilir
//1. ve 2. yöntemde event html içine yazılıyor. Bu istenen bişey değil 
//? Selector variables
const header = document.querySelector("header")
const addButton = document.getElementById("btn")
const input = document.querySelector("#input")
const ul = document.querySelector("ul")

//? 3. yontem: ilgili element nokta "on" ve event adı eşittir fonksyon
//* mouse header 'ın üzerine geldiginde ilgili function cagrilir.
header.onmouseover = function () {
  header.style.backgroundColor = "red"
  header.style.color = "white"
}
//* mouse header 'ın üzerinden ayrildiginda ilgili function cagrilir.
header.onmouseout = function () {
  header.style.backgroundColor = "transparent"
  header.style.color = "black"
}

const yazdir = () => {
  document.write("Hello from Turkey")
}

//? onload event'ı html ve css kodlarininin render edilmesinin hemen akabinde calisir.
// window.onload = yazdir() // 3.yöntem

//? window yüklendigin de input'a focuslan
// 4.yöntem addEventListener'ı tercih et
window.addEventListener("load", () => {
  input.focus()
})

//? 4.Yontem (addeventlistener metodu) ile event tanimlandi
//* add butonuna tiklanildgin event funksiyonu cagrilir
addButton.addEventListener("click", () => {
    // !input.value.trim() hiçbirşey eklenmemesini veya space ile " " eklenmesini engeller
  if (!input.value.trim()) {
    alert("Lütfen bir bilgi giriniz")
  } else {
    const li = document.createElement("li")
    const text = document.createTextNode(input.value)
    li.appendChild(text)
    ul.appendChild(li)
    input.value = ""
    input.focus()
  }
})

//? input elementi üzerinde iken klavyeden bir tusa basilip-birakildiginda (keyup) tetiklenir. keydown ise sadece basıldığında. (keypress kullanma deprecated)
input.addEventListener("keyup", (event) => { // "event" ilgili event hakkında birçok bilgi verir 
  //   console.log(event)
  //   console.log(event.target)
  //   console.log(event.target.value)
  //   console.log(event.keyCode) // hangi tuşa basıldı ise o tuşun kudunu verir enter için 13 esc için 27
  //   console.log(event.code) // tuşun adını verir

  //?  basilan tus enter ise
  if (event.code === "Enter") {
    //? add butonun click fonkisyonu cagiriyoruz
    addButton.click()
  }
})
