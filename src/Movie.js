function Movie(props) {
  const item = props.item;
  return (
    <div>
      <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
      <h2> {item.title}</h2>
      <p>{item.overview}</p>
    </div>
  );
}

export default Movie;
