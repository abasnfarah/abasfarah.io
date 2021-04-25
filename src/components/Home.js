import { makeStyles } from "@material-ui/core";
import React from "react";
import MyAvatar from "./MyAvatar";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: "../static/mountains.jpg",
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
