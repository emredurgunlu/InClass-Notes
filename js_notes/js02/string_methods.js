/* -------------------------------------------------------------------------- */
/*                             Escape karakterleri                            */
/* -------------------------------------------------------------------------- */
// \ işareti ile kullanılır
// \n new line - Yeni bir satıra geçmek için kullanılır
// \t tab 8 karakterlik boşluk bırakır
let metin = 'Ömer"in kalemini unutma';
console.log(metin);

/* -------------------------------------------------------------------------- */
/*                         STRING YAPISI VE INDEXLEME                         */
/* -------------------------------------------------------------------------- */
let course = "Clarusway";
console.log(course[6]);
// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable
course[6] = "v";
console.log(course);
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur
console.log(course.length);

//! ========== Template Literals - backtick ============
let maas = 70000;
const izinGunu = 30;
console.log(`MAAS=${maas} + SIGORTA IZIN SURESI: ${izinGunu} gün`);
console.log(`${maas - izinGunu * 500}`);

const metin1 = "Hello";
const metin2 = "Clarusway";
console.log(metin1 + " " + metin2);
console.log(metin1, " ", metin2);

/* -------------------------------------------------------------------------- */
/*                                  Concat()                                  */
/* -------------------------------------------------------------------------- */
let yeniMetin = metin1.concat(metin2);
console.log(yeniMetin);

/* -------------------------------------------------------------------------- */
/*                   split ()
                 split parçaladığı bölümleri diziye çevirir.
                 Bu sayede Array metodlarından join() ve reverse()  kullanabilirim */
/* -------------------------------------------------------------------------- */
let metin3 = "Clarusway / It / Bootcamp";
let splittedMetin3 = metin3.split("/");
console.log(splittedMetin3);
metin3 = "Clarusway It Bootcamp";
console.log(metin3.split(" ").join(" ")); //join() default olarak araya virgül koyar

/* -------------------------------------------------------------------------- */
/*                          Slice - STRING PARÇALAMA                          */
/* -------------------------------------------------------------------------- */
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))
// negatif değerler ile tersten gelme yapılabilir

let ataSoz = "Oku da adamol";
console.log(ataSoz.slice(7)); // Bitiş değeri verilmezse sonuna kadar alır
console.log(ataSoz.slice(7, 11));
console.log(ataSoz.slice(-10, -8));

/* -------------------------------------------------------------------------- */
/*                         replace()  ve replaceAll()                         */
/* -------------------------------------------------------------------------- */
// str.replace( ne değiştirecek, ne ile değiştirilecek)
console.log(ataSoz.replace("adamol", "insanol"));
let variable1 = ataSoz.replaceAll(" ", "_").replaceAll("a", "e");
console.log(variable1);

/* -------------------------------------------------------------------------- */
//!                       String içinde arama işlemleri                       */
/* -------------------------------------------------------------------------- */
// includes, indexOf, search ,match() metodlarını kullanabiliriz
//! includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.caseSensitive (küçük büyük harfe duyarlı) bir özelliktir.
console.log(`ataSoz'ünde Oku kelimesi geçiyor mu? ${ataSoz.includes("Oku")}`);

//! indexOf (aranacak metin, konum)
//? Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. 
//?Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir
console.log(ataSoz.indexOf("u"));

//! search() : bir string içindeki aranan elemanda ilk bulduğunun index numarasını yazar. Bulamazsa -1 dönderir.
// Büyük küçük harfe duyarlıdır. 

let metin4=" Clarusway it bootcamp.Clarusway develop you IT field"

console.log(metin4.search("IT"));
console.log(metin4.search("it"));

// Regex ile çözüm bulunabilir ******************************************************
// Regular Expression          ****************************************************** 
//  Regex'de "" tırnak yerine / / kulllan. ******************************************

//?   /g => global : bütün cümle için uygula
//?   /i => case sensitive özelliğini kaldırKüçük büyük harfe bakmadan bul

console.log(metin4.search(/IT/gi));

let word="ynigÜn"

console.log(word.search(/ü/gi));
console.log(word.replaceAll(/ü/gi,"i"));

console.log(word.search(/[aeiıouöü]/i)); // kelime içindeki ilk sesli harfin indexini verir

/* -------------------------------------------------------------------------- */
/*                                   match()                                  */
/* -------------------------------------------------------------------------- */
// string içinde aranan metin bulunur ve bir dizi dönderir.

let text="Merhaba bugün gerçekten çok sıcak bir Bugün"

console.log(text.match(/bugün/gi)); // çıktı: [ 'bugün', 'Bugün' ]

let say=text.match(/[ae]/gi) // içinde kaç adet a veya e harfi var
console.log(say.length);

/* -------------------------------------------------------------------------- */
/*                                    trim                                    */
/* -------------------------------------------------------------------------- */

let sentence1="     Clarusway  "
console.log(sentence1.trim());
console.log(sentence1.trimStart());
console.log(sentence1.trimEnd());
/* -------------------------------------------------------------------------- */
/*                                 startsWith,endsWith                        */
/* -------------------------------------------------------------------------- */
// startswith ve endswith true false değer dönderir

metin="Clarusway"
console.log(metin.toUpperCase().startsWith("C"));
console.log(metin.toUpperCase().endsWith("Y"));


//! ************STRING METHODS ************
// String metodları () kullanılır.
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.
//! -------------------------------------------------------------------------- */
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.
