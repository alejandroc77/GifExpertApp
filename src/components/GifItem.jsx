export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <image src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
