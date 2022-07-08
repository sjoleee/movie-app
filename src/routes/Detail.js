import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getDetail = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ff526875e06bdd32c68014b332f2ea4c`
    );
    const json = await res.json();
    setDetail(json);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>LOADING...</h2>
      ) : (
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt={detail.title}
          />
          <p>{detail.release_date}</p>
          <h2>{detail.title}</h2>
          <p>{detail.vote_average}</p>
          <p>{detail.production_companies[0].name}</p>
          <p>{detail.overview}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
