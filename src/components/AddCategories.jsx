import { useState } from "react";

export const AddCategories = ({ onAddCategories }) => {
  const [inputValue, setInputValue] = useState("");

  function onInputChange({ target }) {
    setInputValue(target.value);
  }

  function onSubmit(event) {
    event.preventDefault(); //Para que no se recargue el formulario
    const resul = inputValue.trim(); // trim elimina espacios en blanco
    if (inputValue.trim().length <= 1) return;
    onAddCategories(resul);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Buscat Gifs"
        value={inputValue}
        type="text"
        onChange={onInputChange}
      />
    </form>
  );
};
