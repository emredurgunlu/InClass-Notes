import React from "react";

const Callback = ({ handleChange }) => {
  //  handleChange("emre_callback_deneme"); Fonksyonu burada çağırırsan hata verir
  return (
    <div onClick={() => handleChange("emre_callback_deneme")}>Callback</div>
  );
};

export default Callback;
