console.clear("clear"); // browser konsolunu temizler
console.error("error"); // browser konsoluna kırmızı error yazdırır
console.warn("warn"); // browser konsoluna sarı warn yazdırır

console.time("id");
console.timeEnd("id"); // ikisi arasında çalışan kodların süresini yazdırır

const firstName = prompt("Please enter your name:"); // userdan string alır

alert("browserda uyarı verir");

const cevap = confirm("emin misin?");
console.log("cevap", cevap);
