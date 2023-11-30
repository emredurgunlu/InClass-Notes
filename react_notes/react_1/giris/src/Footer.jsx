// import React from 'react' bu satırı react version 17 sonrası için sil

// rafc emmet //* Named export ile paylasima acildi import { Main } from "./Main"
// export const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

//*   JS alani yorum satırı
const mesaj = "hello";
console.log(mesaj); // Jsx alanında console çalışmaz

// rafce emmet //* Default export ile paylasima acildi import Footer from "./Footer"
const Footer = () => {
  return (
    <>
      {/* JSX alani yorum satırı*/}
      <footer className="my-footer">Harici CSS Footer {mesaj} </footer>
    </>
  );
};

export default Footer;
