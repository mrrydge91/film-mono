import SingleMovie from "../components/singleMovie";
import { useState } from "react";

const SingleMovieContainer = () => {
  const [movie, setMovie] = useState<any>({
    name: "Movie Name",
    tagLine: "Movie Tagline",
    isInProduction: true,
    credits: [
      { name: "Kevin Ridge", role: "director" },
      { name: "Kevin Ridge", role: "writer" },
    ],
    equipNeeded: [
      { item: "lighting", doHave: false },
      { item: "sound stuff", doHave: true },
    ],
    video: "https://www.youtube.com/watch?v=4OTg7XMc1eU",
  });
  return <SingleMovie movie={movie} />;
};

export default SingleMovieContainer;
