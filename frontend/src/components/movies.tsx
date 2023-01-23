import { Button, List, ListItem } from "@mui/material";

const Movies = ({ moviesList, addMovie }: any) => {
  return (
    <div>
      <h1>All movies</h1>
      <Button onClick={addMovie}>Add Movie</Button>

      <List>
        {moviesList.map((movie: any) => (
          <ListItem>{movie.name}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Movies;
