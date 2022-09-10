import { useState } from "react";
import { AddCategories } from "./components/AddCategories.jsx";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", " Dragon Ball"]);

  const onNuevaCategoria = (newCategories) => {
    setCategories([newCategories, ...categories]);
  };
  return (
    <>
      {/* titulo */}
      <h1>GitExpertApp</h1>
      {/* input */}
      <AddCategories onAddCategories={onNuevaCategoria} />
      {/* lista de los gifs */}
      {/* <button onClick={agregarCategoria}>Agregar</button> */}
      <ol>
        {categories.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ol>
    </>
  );
};
