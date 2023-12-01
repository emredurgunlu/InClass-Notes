//* Public klasöründe olmayan resimlere erisebilmek icin import yapmak gerekir. */}
import bird from "./img/kaz.jpg";

//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

export const Main = () => {
  //? Local style objesi (Harici bir dosyadan da import edilebilir)
  const imgStyle = {
    width: "300px",
  };
  const textStyle = {
    backgroundColor: "pink",
    fontSize:"50px",
  };

  return (
    <main>
      {/* inline-CSS (key-value), notasyon olarak camelCase */}
      <h1 style={{ color: "white", backgroundColor: "red" }}>
        MAIN SECTION inline-CSS
      </h1>
      <p style={textStyle}>Variable'a stili atayarak Local style</p>
      <img src={bird} alt="humming" style={imgStyle} />

      {/* Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. /Ana dizin) Bunu resimleri src içi koyup import etmektense public içine koy*/}
      <img src="./img/kus.jpg" alt="bird2" style={imgStyle} />
    </main>
  );
};
