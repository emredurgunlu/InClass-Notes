// Bubling ilgili elementten html'ye kadar gider yani yukarı yönlü. Capturing ise html'den ilgili elemente yani aşağı yönlü.
// default olarak Bubling açık, Capturing kapalı
// Capturing aktif etmek için fonksyondan sonra true ekle .addEventListener("click", () => alert("form"), true)
// form içinde div, div içinde p 3 adet iç içe farklı renkli kutu olsun.
// hepsine addEventListener("click", ()=>alert("...")) ekle
// p'ye tıkladığın zaman yani sadece 1 kere tıklama olduğu halde
// 3 adet tıklama olmuş gibi önce p'nin alerti, sonra div alerti, sonra da form alerti çalışır
// Bu sistemin sağladığı avantaj: bir alışveriş sayfasındaki bin tane ürünün ayrı ayrı tıklanma özellikleri için bin tane addEventListener eklememeize gerek kalmaz.
// addEventListener bin tane değil 1 tane ekleriz ama bin tane ürünün ortak atasına ekleriz
// bu sayede hangi ürünü tıklanırsa tıklanısın ortak atanın onclick fonksyonu tetiklenmiş olur
// tıklanmanın hangi üründen geldiğini de event.target ile anlarız.

document.querySelector("form").onclick = function (event) {
  console.log(event.target); //? event kaynagi
  //! Tiklanilan elemanın arkaplan rengini sari yap.
  event.target.style.backgroundColor = "yellow";
  // div'e ve p'ye onclick eventi atanmadığı halde bublingden dolayı atanmış gibi çalışır

  //*! 500ms sonra atanmis rengi kaldir
  setTimeout(() => {
    event.target.style.backgroundColor = ""; // js'de "" atarsan cssde verilen renge döner, saydam veya beyaz olmaz
  }, 500);
};

if (e.target.classList.contains("fa-plus")) {
    //? static olarak quantity kullanirsak hangi + butonuna tiklanilirsa tiklanilsin akistaki ilk urunun degeri artar.
    // document.getElementById("quantity").innerText++ //bin adet ürününde miktar textinin id'si quantity.
    // ikinci ürünün arttırımına tıklasan bile getElementById("quantity") bin ürün içinde ilk ürününkini seçer
    e.target.previousElementSibling.innerText++ // Bu nedenle bu şekilde yapmalısın. Travering dom kullan çünkü aynısından bir sürü var
  }
