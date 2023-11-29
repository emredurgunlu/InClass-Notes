<script src="app.js" type="module"></script> // html'de modul olduğu belirtilir

// Değişkenler yada fonksyonlar export edilebilir
//? named export
export const isim = "-- Hesap Makinasi--"

const topla = (a, b) => a + b
//? named export (Çoklu)
export { topla, cikar, carp, bol }

// import { PI } from "./hesapMakinasi.js"
import { isim, PI as pi } from "./hesapMakinasi.js"
// named exportta isim önemli ama ismi as ile değiştirmek de mümkün

// ----------------------------

export default mesaj //? default export yöntemi
//? modül başına sadece bir tane export default yapılabilir.

// export default edilen import edildi. Farkı süslü parantez kullanılmamasıdır.
//? export default'da as kullanmadan herhangi bir isim kullanılabilir. Yani mesaj yerine istediğin kelimeyi yazabilirsin
import mesaj from "./hesapMakinasi.js" 
mesaj()

// ----------------------------
// import * as emoji from 'node-emoji' bunun içindeki herşeyi emoji adı ile getir demek

/* ----------------------- NODE JS ortamında modüller ----------------------- */
// 1-Common Js modül yöntemi:
const cikar = (a, b) => a - b;
exports.topla = topla

const MAX_VALUE = 1000
exports.maxValue = MAX_VALUE

const { cikar, maxValue } = require("./app")

// 2-ES-modül yöntemi:
//? NodeJS 2020 yılından beridir ES-Modül desteği vermeye başlamıştır ama 
// bunun şartı dosyaların bir proje haline getirilmesidir
// npm init ile node js ortamını proje haline getirebilirsin, package.json diye bir dosya ekler
// package.json projenin fihristesi gibidir ne içerip ne içermediğini gösterir
// package.json içine (description altına olabilir) "type": "module", eklemelisin
// npm init dediğinde proje adını vs sorar, kısaca npm init -y diyerek default ayarlarla proje başlatabilirsin
// script içine "start": "node index", yazarsan dosyayı her çalıştırmak için "node dosya_adi" yapmana gerek kalmaz,
// artık tüm dosyaları aynı komutla yani "npm start" ile başlatabilirsin
// bu artık bir node projesi olduğundan npm sitesinden istediğin kütüphaneyi yükleyebilirsin
// herhangi bir kütüphane yüklediğinde node_modules diye bir klasör oluşur
// indirdiğin kütüphaneleri package.json içinde dependencies bölümünde görebilirsin 
// kütüphane yüklemenin diğer yolu dependencies bölümüne manuel olarak ekleyip "npm i" ile derlemektir.
// kütüphaneyi projeden silmek için dependencies bölümündeki yerini sil ve "npm i" ile tekrar derleyerek node_modules klasöründen de silinmesini sağla
// kısaca "npm i" dependencies bölümünde ne varsa onları indirir veya siler