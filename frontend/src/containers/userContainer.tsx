import { useState } from "react";
import User from "../components/user";

const UserContainer = () => {
  const [user, setUser] = useState({
    name: "Kevin Ridge",
    tagLine: "I made this",
    hometown: "Pittsburgh",
    dateJoined: "Today",
    credits: [{ film: "film name", role: "role name" }],
    roles: ["pa", "director", "writer"],
    skills: ["pa", "director"],
    pic: "asdfasdf",
  });
  return <User user={user} />;
};

export default UserContainer;
