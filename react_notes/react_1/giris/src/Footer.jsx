// import React from 'react' bu satırı react version 17 sonrası için sil

// rafc emmet //* Named export ile paylasima acildi import { Main } from "./Main"
// tüm react kısayolları için dsznajder extensionı > details > snippets
// export const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

const mesaj = "hello";
console.log("JS alani", mesaj);

// rafce emmet //* Default export ile paylasima acildi import Footer from "./Footer"
const Footer = () => {
  return (
    <>
      {true ? console.log("JSX alani", mesaj) : console.log("false")}
      {/* JS ifadeleri JSX alanında süslü parantez içinde yazılır*/}
      <footer className="my-footer">Harici CSS Footer {mesaj} </footer>
    </>
  );
};

export default Footer;
