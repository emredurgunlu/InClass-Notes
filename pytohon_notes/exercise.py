# https://python-istihza.yazbel.com/index.html
import timeit
import sys
import string
import random
import datetime
# import pytz
# math modülünün içinden sadece factorial fonksyonunu import eder.
from math import factorial
# bu şekilde yaptığında artık math.factorial() şeklinde çağırmazsın çünkü math yok sadece factorial() şeklinde çağırırsın

print("hello\nworld")
print(r"hello\nworld")
my_number = 5
what = None
print(type(my_number))
print(type(what))
# True False first letters are uppercase
# type conversions str(5), int("5"), float(5), int(3.99)
# 11 // 2 = 5 full part from division
# 5 ** 3 = 125
word1 = "hello"
word2 = "world"
print(word1, word2, sep="----------", end="  finished\n")
print(1 and 0)
print(1 or 0)
print(not (True))
# priority not and or
# False values: 1-None 2-Zero:0, 0.0, 0j 3-Empty seq. or collections: '',[],{},()
# True values: Any remaining values
# "and" look for false. If not find, return the last
print(2 and 3)
print(0 and 3)
print([] and "be happy")
print(None and "be happy")
# "or" look for true. If not find, return the last
print([] or "be happy")
print(None or ())
text = "Clarusway"
print(text[0])
# Slicing [start:stop:step] start is included, stop is excluded
print(text[0:3])
print(text[0:])
print(text[:3])
print(text[0:5:2])
# text[6:1] returns empty str ""
# step eksi olduğu için terse doğru gider. o nedenle boş str döndürmez
print(text[6:1:-1])
# print(text[0:25]) slicing not give out of range error
print(text[-1])  # kelimenin son harfi -1'den başlar (sondan 2.harfi -2)
print(text[-9:3])
# burası boş str verirken alttaki satır yaw veriyor. ilginç
print(text[0:5:-1])
print(text[:5:-1])
print(text[-2:])
print(text[::-1])  # stringi tersten yazdırma metodu
print("emre"[0])
print(len("emre"))
print("emre"*3)
print(*"emre")  # her harfi teker teker yazdırır
print(*"emre", sep="___")
a = 5
# a = a + 3
a += 3
print(a)
print(f"{a} sayısının karesi: {a**2}")
name = "ALİ"
print(f"senin ismin: {name.capitalize()}")
# string immutable'dır yani yeni bir değer atamadan değişmez. .capitalize() .lower() gibi metotlar ile orjinali değişmez
print("senin ismin: ", name)
print("@" in "emredurgunlu@gmail")
print("E" in "emredurgunlu@gmail")
print("E" not in "emredurgunlu@gmail")
print("www.clarusway.com".endswith(".com"))
# 2 den basla 5 e kadar git = "aru". bu "aru" a ile mi baslıyor. .endswith()
print("clarusway".startswith("a", 2, 5))
print("emre".count("e"))  # kaç adet e harfi olduğunu gösterir
# ilk bulduğu e harfinin kaçıncı indexte olduğunu gösterir. bulamazsa -1 dönderir. rfind() sağdan aramaya başlar.
print("emre".find("e"))
print("emre".replace("m", "k"))
# "Clarusway" yazısının sonundaki a'yı nasıl replace edebiliriz:
print("Clarusway"[::-1].replace("a", "*", 1)[::-1])
# str.swapcase() küçük harfleri büyük, büyük harfleri küçük yapar
# str.capitalize() nasıl olursa olsun ilk harfi büyük gerisini küçük yapar
# str.title() tüm kelimelerin ilk harfini büyük gerisini küçük yapar
# .upper() hepsini büyük, .lower() hepsini küçük yapar. Hiçbir str metodu str'nin orj halini değiştirmez
# str.strip() removes all spaces from both sides. str.strip("a") removes all "a" from both sides
# str i ile başlıyor,i "yi"nin içinde var mı? var, i'yi at. n var mı? yok, baştan aramayı bitir, sondan bak. y "yi"'nin içinde var mı? var, y'yi at. t var mı? yok, aramayı sonlandır.
print("interoperability".strip("yi"))
# listeler str gibi immutable değildir. listeler mutable'dır bu yüzden listelerde yaptığın değişiklik orj listi değiştirir
print(list("clarusway"))
liste1 = [1, 2, 3, 4, None]
print(type(liste1))
# boş liste 2 şekilde oluşturulur: bos_liste1 = [] ve bos_liste2 = liste()
text = "Clarusway"
text_liste = list(text)
print(text_liste[0])
print(text_liste[-1])
text_liste = list([text])
print(text_liste)
print(text_liste[0][-1])
# .clear() listenin içini temizler
# .append("a") listenin sonuna "a" elemanını ekler
# .extend() aynı append() gibidir ama farklı olarak birden fazla elemam ekler. .extend() yerine iki listeyi + ile toplayabilirsin
liste1 = [1, 2, 3]
liste2 = [4, 5, 6]
liste1.append(liste2)
print(liste1)
liste1 = [1, 2, 3]
liste1.extend(liste2)
print(liste1)
liste = [1, 4, 7]
# 2. elemana 9 ekle
liste.insert(2, 9)
print(liste)
liste = ["emre", 0, 1, 2, True, 3]
liste.remove("emre")
print(liste)
# 1 değeri true olduğu için 1'i attı. remove() metodunda silmek istediğin şey yoksa hata verir
liste.remove(True)
print(liste)
# .pop(index) seçtiğin indexe göre listeden eleman siler eğer index girmez isen -1. indexi yani listenin son elemanını siler
# .sort() listenin elemanalarını sıralar ama hepsinin aynı tipte olması gerekir aksi taksdirde hata verir
print(ord("a"))  # ascii tablosundaki değeri verir
# ascii tablosundaki unicode'un hangi karaktere karşılık geldiğini verir
print(chr(97))
isimler = ["cem", "emre", "co"]
# elemanları uzunluklarına göre sıralar. sort orj veriyi değiştirir, sorted değiştirmez
print(sorted(isimler, key=len))
print(True+1)
even_numbers = [2, 4, 6, 8, 10]
print(even_numbers[1:2])  # slice liste
# range girilen start stop ve step değerine göre bir range üretip bunu listeye çevirir
print(list(range(0, 20, 2)))
print(list(range(0, 20, 1)[::2]))  # ::2 en baştan en sona 2'şer git anlamında
# my_list[:] returns the full copy of the sequence
# my_list[start:] returns elements from "start" to the end element
# my_list[:stop] returns elements from the first element to "stop-1" element
# my_list[::step] returns each elements with a given step
# tuples listelerden daha hızlıdır, immutable'dır(değiştirilemez) bu nedenle de atama yapılamaz.
# iki şekilde tuple oluşturabilirsin
# "emre" bir str yani iterable olduğu için hata vermedi, int bir değer yazsaydın hata verirdi
my_tuple = tuple("emre")
print(my_tuple)
my_tuple = tuple(["emre", 3, "ver"])
print(my_tuple)
my_tuple = ()
print(type(my_tuple))
my_tuple = ("emre")
print(type(my_tuple))
my_tuple = ("emre",)  # tek elemanlı tuple yapmak için sonuna virgül koymalısın
print(type(my_tuple))
a, b, c = 3, 6, 8
print(a, b, c)
a = 1, 2, 3, 6, 7  # tuple oluşturmak için illa ki parantez koymana gerek yok
print(a)
print(type(a))
# tuple listeye liste tuple'a dönüştürülebilir
# eğer tuple'ın içindeki elemanlardan biri liste ise o listeyi komple değiştiremezsin çünkü tuple elemanları değişmez ama listenin içindeki bir elemanı değiştirebilirsin
a = (1, 2, 3)
b = [1, 2, 3]
print(sys.getsizeof(a))  # ram de kapladığı alanı verir
print(sys.getsizeof(b))
# dictionary sıralı değildir index numarası yoktur
sozluk2 = dict({"emre": 35, "yasemin": 30})
print(sozluk2)
sozluk2 = dict((("emre", "35"), ("yasemin", "30")))
print(sozluk2)
sozluk = {"emre": 35, "yasemin": 30}
print(sozluk)
print(sozluk["emre"])
sozluk["yusuf"] = 2  # adding a new item to a map
print(sozluk)
print(sozluk.get("emre", "aradığınız değer bulunamadı"))
print(sozluk.get("emreeeeeeee", "aradığınız değer bulunamadı"))
print(sozluk.items(), "\n")
print(sozluk.keys(), "\n")
print(sozluk.values(), "\n")
print(list(sozluk.items()))
print(list(sozluk.keys()))
print(list(sozluk.values()), "\n")
sozluk.update({"emre": "40"})
print(sozluk)
sozluk.update({"emreeeeee": "45"})
print(sozluk)
# .pop("emreeeeee", "bu key değeri yok") pop'un del'den farkı eğer silinecek key yok ise hata vermek yerine uyarı yazısı döndürebilmesidir
del sozluk["emreeeeee"]
print(sozluk)
print("emre" in sozluk)
print("40" in sozluk)
print("40" in sozluk.values())
# parantez olmayınca tuple olarak algılar
colors = "red", "green", "blue", "red"
print(colors)
# kümenin içinde tekrar eden eleman olmaz colors.add("yeşil") kümeye eleman ekler
print(len(set(colors)))
colors = {"turuncu", "beyaz"}  # set map gibi tanımlanır ama value yok
print(type(colors))
print(set("emreeeeeeeeeeee"))
# bos = {} şeklinde boş küme oluşturamazsın, o boş dictionary olur ancak bunu yapabilirsin: bos = set()
harfler = string.ascii_lowercase
print(harfler)
kumem = {True, 1, 1.0, 1+0j, "1"}  # "1" haricinde diğerleri eleman tekrarı
print(kumem)
print(bool(2) == bool(1))
# kümenin içine liste veya dictionary yazamazsın ana tuple yazabilirsin
# kumem.discard("1") ile kumem.remove("1") arasındaki fark eğer atılacak eleman küme içinde yoksa discard hata vermez remove hata verir .pop() ile de eleman uçurabilirsin
# print(küme_a - küme_b) veya print(küme_a.difference(küme_b)) a'da olup b'de olmayan elemaları gösterir
# print(küme_a | küme_b) veya print(küme_a.union(küme_b)) birleşimlerini verir
# print(küme_a & küme_b) veya print(küme_a.intersection(küme_b)) kesişimlerini verir
# .lower().strip() küçük harflere çevirir ve sağlı sollu boşlukları temizler

# sonuc = input("yes veya no yazın: ").lower().strip() == "yes"
# print("you entered: ", sonuc)
if 2 > 3:
    print("if bloğu")  # soldan 4 karakter boşluk bırak
elif 2 > 1:
    print("elif çalıştı")
else:
    print("else çalışır")
# bu iki ifade aynı: if sayi%2 == 0: ve if not sayi%2: cünkü 0'ın değeri false'dur
sayi = 2
while sayi < 5:
    print("while döngü")
    sayi += 1
print("döngüden çikti")
print("12435".isnumeric())

while True:
    if 2 > 5:
        print("while if")
    else:
        print("while else")
        break
print("random sayi: "+str(random.randint(5, 20)))
for i in ["a", "s", "d"]:
    print(i)
for i in range(5, 10):
    print(i)
print(range(5))
print(* range(5))  # yıldızın vazifesi her bir elemanı teker teker almak
print(*"emre")
# zip fonksyonu 2 veya daha fazla listeyi fermuar gibi birleştirir
listem1 = ["a", "s", "d", "e"]
listem2 = [1, 2, 3, 4, 5, 6, 7]
# zip de aynı range fonksyonu gibi bu şekilde yazdırılamaz:
print(zip(listem1, listem2))
print(*zip(listem1, listem2))  # veya
print(list(zip(listem1, listem2)))  # şeklinde yazdırabilirsin
text = ["one", "two", "three", "four", "five"]
numbers = [1, 2, 3, 4, 5]
for x, y in zip(text, numbers):
    print(x, " : ", y)
for i in range(1, 10):
    print((str(i)*(2*i-1)).center(17))
liste = [3, 5, 7]
print(sum(liste))
# sum(range(1,75)) 1'den 75'e kadar olan sayıları toplar
print(max(liste))
print(list(enumerate("clarusway")))
for i, j in enumerate("clarusway"):
    print(i, " : ", j)
sayilar = ["1", "2", "3", "4", "5", "6"]
# map fonksyonu sayilar listesindeki elemanları tek tek gezerek herbirine int dönüştürme fonksyonu uyguluyor
print(list(map(int, sayilar)))


def selamlama():
    print("selamladim")


selamlama()


def selamlama(isim):
    print("selamladim", isim)


selamlama("emre")


def selamlama(isim):
    return "selamladim", isim


print(selamlama("emre"))


def mutlak(a):
    '''
    mutlak değer alma fonksyonu
    input int
    return int
    '''
    if a < 0:
        return -a
    else:
        a


print(mutlak(-5))
print(mutlak.__doc__)
my_list = [0, 1, 2, 3, False, 5, True]
print(list(filter(None, my_list)))  # listeyi falsy değerlerden arındırır.
# filter fonksyonunun içine ya None yazarsın ya da true veya false return eden bir fonksyon yazarsın
sayilarim = [1, 2, 3, 4, 5, 6, 7, 8, 9]


def ciftmi(aa):
    return aa % 2 == 0


print(list(filter(ciftmi, sayilarim)))


def tanisma(isim, soyisim):
    print(f"adim: {isim} soyadim: {soyisim}")


tanisma(soyisim="durgunlu", isim="emre")  # burası key word argument
tanisma("emre", "durgunlu")
# bir fonksyonu hem key word hem de positional argument ile çağırabilirsin. key word argumenttan sonra positional argument gelmez fakat tam tersi olur


def city(capital, continent="Europe"):
    print(capital, "in", continent)


city("istanbul")
city("izmir", continent="Africa")
city("ankara", "türkiye")


def toplama(*a):  # yıldız her bir elemanı teker teker al demek
    print(sum(a))


toplama(5)
toplama(5, 10)
toplama(5, 10, 20)

# bu alt kısım gereksiz


def tanitim(a, b):
    print(a, "kişisinin ismidir")
    print(b, "kişisinin ismidir")


tanitim(*{"a": "ali", "b": "veli"})  # tek yıldız keyleri gönderir
tanitim(**{"a": "ali", "b": "veli"})  # çift yıldız valueları gönderir
tanitim(*{"m": "ali", "k": "veli"})  # hata vermez
# tanitim(**{"m": "ali", "k": "veli"}) # hata verir
try:
    print(5/0)
except ZeroDivisionError:
    print("sifira bölünmez")
except:
    print("bilinmeyen hata")
finally:
    print("hata olsa da olmasa da çalişir")

print(string.punctuation)
print(datetime.date.today())
# zone=pytz.timezone("Europe/İstanbul")
# print(datetime.datetime.now(zone))

# LIST COMPREHENSION
kareler1 = []  # klasik yöntem
for i in range(1, 11):
    kareler1.append(i**2)
print(kareler1)
# list comprehension yöntemi. performans açısından çok daha avantajlı
kareler2 = [i**2 for i in range(1, 11)]
print(kareler2)

harfler = ["a", "b", "c", "d"]
asc1 = []
for i in harfler:
    asc1.append((i, ord(i)))
print(asc1)

asc2 = [(i, ord(i)) for i in harfler]
print(asc2)


def classic():
    milyon = []
    for i in range(1_000_000):
        milyon.append(i)


execution_time = timeit.timeit(classic, number=1)
print(f"Execution time for classic: {execution_time*1000} milliseconds")


def list_comprehension():
    [i for i in range(1_000_000)]


execution_time = timeit.timeit(list_comprehension, number=1)
print(
    f"Execution time for list_comprehension: {execution_time*1000} milliseconds")

harf = ["a", "b", "c"]
sayi = ["1", "2", "3"]
c = []
for i in harf:
    for j in sayi:
        c.append((i, j))
print(c)
c = [(i, j) for i in harf for j in sayi]
print(c)

liste=[1,2,3,4,5,6,7,8,9,0]
cift=[]
for i in liste:
    if not (i%2):
        cift.append(i)
print(cift)

cift=[i for i in liste if not (i%2)]
print(cift)

#list comprehension if-else ile birlikte kullanımı biraz değişik:
print(["tek" if i%2==1 else "cift" for i in range(1,11)])