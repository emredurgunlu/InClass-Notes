import React from "react";

const Callback = ({ handleChange }) => {
  //  handleChange("emre_callback_deneme"); Fonksyonu burada çağırırsan hata verir ama fonksyonun içinde setState yoksa hata vermez
  return (
    <div onClick={() => handleChange("emre_callback_deneme")}>Callback</div>
  );
};

export default Callback;
