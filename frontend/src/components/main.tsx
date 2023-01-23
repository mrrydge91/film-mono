import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/singleMovie">Single Movie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
