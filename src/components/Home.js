import { makeStyles } from "@material-ui/core";
import React from "react";
import MyAvatar from "./MyAvatar";
import mountains from "../static/mountains.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${mountains})`,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MyAvatar />
    </div>
  );
}
