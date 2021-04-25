import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import MyAvatar from "./MyAvatar";
import mountains from "../static/mountains.jpg";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${mountains})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  card: {
    background: {
      default: "#181818",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Card>
          <Typography variant="h5" component="h2">
            Site is currently under construction. For Resume check menu. :)
          </Typography>
        </Card>
      </div>
    </div>
  );
}
