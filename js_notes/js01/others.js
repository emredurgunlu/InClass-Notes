console.clear("clear"); // browser konsolunu temizler
console.error("error"); // browser konsoluna kırmızı error yazdırır
console.warn("warn"); // browser konsoluna sarı warn yazdırır

console.time("id");
console.timeEnd("id"); // ikisi arasında çalışan kodların süresini yazdırır

const firstName = prompt("Please enter your name:"); // userdan string alır

alert("browserda uyarı verir");

const cevap = confirm("emin misin?");
console.log("cevap", cevap);

localStorage.setItem("harvey", 999); // local veri depolama
console.log(localStorage.getItem("harvey")); // 999

// const passwordValue = document.getElementById("password");
// const copyEvent = document.getElementById("copy");
// copyEvent.addEventListener("click", copyPassword);
// const copyPassword = () => {
  navigator.clipboard.writeText(passwordValue.innerText); // browserdaki bir texti kopyalar
// };
