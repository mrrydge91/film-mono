import { useState } from "react";
import Movies from "../components/movies";

const MoviesContainer = () => {
  const [moviesList, setMoviesList] = useState<any[]>([]);
  const [movieDetails, setMovieDetails] = useState<any>({
    name: "",
    description: "",
    credits: [],
  });

  const addMovie = () => {
    setMoviesList((moviesList) => [...moviesList, movieDetails]);
  };

  return <Movies moviesList={moviesList} addMovie={addMovie} />;
};

export default MoviesContainer;
