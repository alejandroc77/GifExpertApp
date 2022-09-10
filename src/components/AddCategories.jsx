import { useState } from "react";

export const AddCategories = () => {
  const [input, setValue] = useState("Dragon ball");

  function agg(evet) {
    //     console.log(evet.target.value);
    setValue();
  }
  return (
    <input
      onChange={(evet) => {
        agg(evet);
      }}
      type="text"
      placeholder="Buscat Gifs"
      value={input}
    />
  );
};
