import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRatedMovie() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTopRated();
  }, []);

  async function getTopRated() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    
    const response = await axios(URL);

    /**
     * Simpan data movies dari axios ke state movies.
     * Upadte state menggunakan setMovies().
     */
    setMovies(response.data.results);
  }

  return (
    <>
    <Hero />
    <Movies movies={movies}/>
    </>
  );
}

export default TopRatedMovie;
