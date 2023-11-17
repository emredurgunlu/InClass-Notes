//* 1- Promise (Custom async kod yazmak için elverişli- Advance)
//! 2- Fetch API (Promise'in basitlestirilmis hali),
//! 3- ASYNC-AWAIT (Promise'in ve Fetch API'nin makyajlanmis hali)

setTimeout(() => {
  console.log("timeout doldu");
}, 5000); //?  500ms sonra tetikleme olur.
//veya
function emre() {
  console.log("timeout doldu");
}
setTimeout(emre, 5000);

let i = 0;
const zaman = setInterval(() => {
  console.log(++i);
  if (i >= 10) {
    clearInterval(zaman); // periyodik çalışmayı sonlandırır
  }
}, 100); // şu kadar ms'de bir periyodik olarak çalışır

// To stop the execution of a setInterval() function, call the clearInterval() function with the interval ID.
 

// let url= 'https://api.github.com/users'
let url = "https://randomuser.me/api/";
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data.results[0].name.first));

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

let veri = "";
fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res);
    if (!res.ok) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Response
      //? Fetch api'da hatayi bizim yakalamiz gerekiyor.
      throw new Error(`Hata: ${res.status}`); //? bir hata firlatiyoruz
    }
    return res.json();
  })
  .then((data) => {
    show(data);
  })
  .catch((err) => document.write("hata sebebi: ", err)); // linkin sonundaki s harfini silersen hata verir ve document.write() ile ekrana yazdırır

function show(users) {
  const userSection = document.getElementById("users");
  users.forEach((user) => {
    userSection.innerHTML += `
            <h1>${user.login}</h1>
            <img src="${user.avatar_url}" width="200px" alt="" />
            <p><a href="${user.html_url}" target="_blank">URL</a></p> 
        `;
  });
}
