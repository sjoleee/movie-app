import { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ff526875e06bdd32c68014b332f2ea4c"
    );
    const json = await res.json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
