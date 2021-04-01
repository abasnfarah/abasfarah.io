import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import avatarPhoto from "../images/avatarPhoto.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    centered: true,
  },
}));

export default function MyAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Abas Farah" src={avatarPhoto} className={classes.large} />
    </div>
  );
}
