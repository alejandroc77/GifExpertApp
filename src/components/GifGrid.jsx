import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ categoria }) => {
  getGifs(categoria);
  return (
    <>
      <ul>
        <li>{categoria}</li>
      </ul>
    </>
  );
};
