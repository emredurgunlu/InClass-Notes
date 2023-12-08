import Callback from "./Callback";
import Photo from "./Photo";
import { useState } from "react";
// props için bak:
// https://github.com/emredurgunlu/Products-List/blob/master/src/components/products/ProductsList.jsx
// Bunu aşağıdaki linkte arat (bu dosyada allta children kullanımına örnek de var): 
// When you nest content inside a JSX tag, the parent component will receive that content in a prop called children
// https://react.dev/learn/passing-props-to-a-component
const Card = ({ name, tel = 512, src }) => { // tel = 512 değer gelmezse default value
  const [deneme, setDeneme] = useState("deneme_basarisiz");
  let deneme2 = 10;
  const handleChange = (e) => {
    setDeneme(e);
    //! set metodları asenkron olarak çalışır. fonksiyon içinde update edilmiş state'e anlık olarak ulaşamayız
    console.log("deneme", deneme);
    deneme2 += 2;
    console.log("deneme2", deneme2);
  };
  console.log("deneme", deneme);
  return (
    <div>
      <h2>Hello {name}</h2>
      <Photo src={src} />
      <Callback handleChange={handleChange} />
      <p>Telephone: {tel}</p>
    </div>
  )
}

// const Card = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h2>Hello {props.name}</h2>
//       <Photo src={props.src} />
//       <p>Telephone: {props.tel}</p>
//     </div>
//   );
// };

// const Card = (props) => {
//   const { name, tel, src } = props;
//   return (
//     <div>
//       <h2>Hello {name}</h2>
//       <Photo src={src} />
//       <p>Telephone: {tel}</p>
//     </div>
//   );
// };

export default Card;

/* -------------------------------------------------------------------------- */
/*                         children kullanımına örnek                         */
/* -------------------------------------------------------------------------- */
// function Card({ children, title }) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <h1>{title}</h1>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card title="Photo">
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card title="About">
//         <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//       </Card>
//     </div>
//   );
// }


