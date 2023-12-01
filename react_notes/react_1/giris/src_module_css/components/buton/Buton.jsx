import ButonStyle from "./Buton.module.css";

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin [" "] kullanılır
//* Koseli parentez erisimi en garanti yontemdir.

const Buton = ({ name }) => {
  return (
    // ButonStyle.title da yazılabilir
    <div className={ButonStyle["title"]}> 
      <button className={ButonStyle["btn-blue"]}>{name}</button>
    </div>
  );
};

export default Buton;
