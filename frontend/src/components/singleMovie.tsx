import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";

const SingleMovie = ({ movie }: any) => {
  return (
    <div>
      <Typography variant="h1" textAlign="center">
        {movie.name}
      </Typography>
      <Divider />
      <Typography variant="h4" textAlign="center">
        {movie.tagline}
      </Typography>
      {movie.video && <ReactPlayer url={movie.video} />}
      {movie.isInProduction && <Typography>Is In Production</Typography>}

      <Card sx={{ border: "black solid 1px" }}>
        <CardContent>
          <Typography variant="h5">Equipment Needed</Typography>
          <List>
            {movie.equipNeeded.map((equip: any) => (
              <ListItem>
                {equip.item}....{equip.doHave ? "Have it" : "Don't have it"}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <Card sx={{ border: "black solid 1px" }}>
        <CardContent>
          <Typography variant="h5">Crew</Typography>
          <List>
            {movie.credits.map((credit: any) => (
              <ListItem>
                {credit.name}....{credit.role}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleMovie;
