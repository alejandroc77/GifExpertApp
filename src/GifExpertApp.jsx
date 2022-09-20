import { useState } from "react";
import { AddCategories } from "./components/AddCategories.jsx";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onNuevaCategoria = (newCategories) => {
    if (categories.includes(newCategories)) return; // validamos para que no se repita el nombre
    setCategories([newCategories, ...categories]);
  };
  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategories onAddCategories={onNuevaCategoria} />

      {categories.map((element) => (
        <GifGrid key={element} categoria={element} />
      ))}
    </>
  );
};
