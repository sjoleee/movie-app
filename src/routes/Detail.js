import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const getDetail = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ff526875e06bdd32c68014b332f2ea4c`
    );
    const json = await res.json();
    console.log(json);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return <div>ddd</div>;
}

export default Detail;
