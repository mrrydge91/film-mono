import { Route, Routes } from "react-router-dom";
import MoviesContainer from "./containers/moviesContainer";
import UserContainer from "./containers/userContainer";
import SingleMovieContainer from "./containers/singleMovieContainer";
import MainContainer from "./containers/mainContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/movies" element={<MoviesContainer />} />
        <Route path="/user" element={<UserContainer />} />
        <Route path="/singleMovie" element={<SingleMovieContainer />} />
      </Routes>
    </div>
  );
}

export default App;
