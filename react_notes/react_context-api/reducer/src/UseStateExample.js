import { useState } from "react";

const UseStateExample = () => {
  const [catImage, setCatImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCatImage(data[0].url);
      setError(""); //hata yoksa error boş string
    } catch (error) {
      setError("DATA CAN NOT BE FETCHED");
      setCatImage("");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(error);
  console.log(catImage);

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading} //loading is tek atılma anında true, istek sonucu ne olursa olsun false oluyor.
        // Bu nedenle buton istek atılma anında disabled oluyor
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>} {/* hata varsa hatayı yazdır, hata yoksa yani boş string dolayısıyla falsy ise yazdırma */}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseStateExample;
