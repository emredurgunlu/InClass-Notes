// import "./Card.css"
import CardStyle from "./Card.module.css";

import data from "../../data";
import Buton from "../buton/Buton";

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* Card.module.css içinde de Buton.module.css içinde de title classı var.
//  eğer modules şeklinde yapmasa idik Buton.jsx içindeki classı title olan element Card.css den de etkilenecekti ve bu büyük projelerde kafa karıştıracaktı. module yaptığımız için etkilenmiyor

const Card = () => {
  console.log(data);
  return (
    // {} içindeki js kodları birden fazla element döndürdüğü için div veya react Fragments içine alınmalı
    <div>
      {data.map(
        (
          { id, language, img, btnName },
          index //  =>{ return (<div key={id}>...)} bu şekilde yapmak yerine daha kısa yaptık
        ) => (
          // key; tekrar eden şeylerin en başındaki elemente konur eğer id yoksa index ver
          <div key={id}>
            <h1 className={CardStyle.title}>{language}</h1>
            <img src={img} alt="img" />
            <Buton name={btnName} />
          </div>
        )
      )}

      {/*       {data.map((person) => { bu şekil uzun olur, 2 tane return yazmış oluruz.
        const { id, language, img, btnName } = person;
        return (
          <div key={id}>
            <h1 className={CardStyle.title}>{language}</h1>
            <img src={img} alt="img" />
            <Buton name={btnName} />
          </div>
        );
      })} */}

      {/* <h1>{data[0].language}</h1>
      <img src={data[0].img} alt="" />
      <Buton name={data[0].btnName} />

      <h1>{data[1].language}</h1>
      <img src={data[1].img} alt="" />
      <Buton name={data[1].btnName} />

      <h1>{data[2].language}</h1>
      <img src={data[2].img} alt="" />
      <Buton name={data[2].btnName} /> */}
    </div>
  );
};

export default Card;
