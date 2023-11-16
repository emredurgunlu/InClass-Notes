// async-await ile fetch'deki .then() zincirlemesinden kurtuluyorsun

/* let i = 0;
const zaman = setInterval(() => {
  console.log(++i);
  if (i >= 10) {
    clearInterval(zaman); // periyodik çalışmayı sonlandırır
  }
}, 100); // şu kadar ms'de bir periyodik olarak çalışır

// async-await kullanıyorsan then kullanıp zincir yapmana gerek kalmıyor
const deneme = async () => {
  try {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    console.log(data[0].login);
  } catch (error) {
    console.log("hata aldik", error);
  }
};
deneme(); */

const getNews = async () => {
  const API_KEY = "c118dde6651a44d3a294ce40620b5c83";
  const BASE_URL = "https://newsapi.org/v2/";
  const queryString = "top-headlines?country=us&category=sport&pageSize=20&page=1&";

  // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=c118dde6651a44d3a294ce40620b5c83`)

  try {
    const res = await fetch(`${BASE_URL}${queryString}apiKey=${API_KEY}`);
    //? Error handling
    if (!res.ok) { // eğer Unauthorized hatası varsa örneğin apı key yanlış ise try bloğu çalışmaya devam eder. Bu nedenle çalışmaya devam etmemesi için bu şekilde bir kontrol ekliyoruz
      throw new Error(`Something went wrong:${res.status}`);
    }
    const data = await res.json();
    renderNews(data.articles);
  } catch (error) { // throw'un gönderdiğini yakalıyor veya try bloğu içinde hata yakalanmışsa onu gösteriyor
    const newsDiv = document.getElementById("news-div");
    newsDiv.innerHTML = `
          <h2>${error}</h2>
      `;
  }
};
const renderNews = (news) => {
  const newsDiv = document.getElementById("news-div");

  news.forEach((item) => {
    const { title, urlToImage, url, content } = item;
    newsDiv.innerHTML += `
      <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
              <img src="${urlToImage}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${content}</p>
                  <a href="${url}" target="_blank" class="btn btn-primary">Detail</a>
              </div>
          </div>
      </div>
      `;
  });
};

window.addEventListener("load", () => {
  getNews();
});
