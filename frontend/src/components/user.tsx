import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const User = ({ user }: any) => {
  return (
    <div>
      <Typography variant="h1" textAlign="center">
        {user.name}
      </Typography>
      <Divider />
      <img src={user.pic} alt="profile" />
      <Typography variant="h4" textAlign="center">
        {user.tagLine}
      </Typography>
      <Typography variant="h5" textAlign="center">
        Hometown: {user.hometown}
      </Typography>
      <Divider />
      <Card sx={{ border: "black solid 1px" }}>
        <CardContent>
          <Typography variant="h5">Skills</Typography>
          <List>
            {user.skills.map((skill: string) => (
              <ListItem>{skill}</ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <Card sx={{ border: "black solid 1px" }}>
        <CardContent>
          <Typography variant="h5">Roles</Typography>
          <List>
            {user.roles.map((role: string) => (
              <ListItem>{role}</ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <br />
      <Card sx={{ border: "black solid 1px" }}>
        <CardContent>
          <Typography variant="h3">Credits</Typography>
          <List>
            {user.credits.map((credit: any) => (
              <ListItem>
                {credit.film}.....{credit.role}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default User;
