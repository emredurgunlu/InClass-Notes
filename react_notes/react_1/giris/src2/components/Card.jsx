import Photo from "./Photo";

const Card = ({ name, tel, src }) => {
  return (
    <div>
      <h2>Hello {name}</h2>
      <Photo src={src} />
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
