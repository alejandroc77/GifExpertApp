import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
useEffect;
export const GifGrid = ({ categoria }) => {
  useEffect(() => {
    getGifs(categoria);
  }, []);

  return (
    <>
      <ul>
        <li>{categoria}</li>
      </ul>
    </>
  );
};
