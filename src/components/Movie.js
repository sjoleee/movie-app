import { Link, useNavigate } from "react-router-dom";

function Movie(props) {
  const item = props.item;
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title}
      />
      <h2
        onClick={() => {
          navigate(`/detail/${item.id}`);
        }}
      >
        {item.title}
      </h2>
      <p>{item.overview}</p>
    </div>
  );
}

export default Movie;
