import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Abas Farah
          </Typography>
          <Button color="inherit" href="https://github.com/abasnfarah">
            <GitHub src="github.com/abasnfarah" />
          </Button>
          <Button color="inherit" href="https://twitter.com/abasfarah">
            <Twitter />
          </Button>
          <Button
            color="inherit"
            href="https://linkedin.com/in/abas-farah-92268682/"
          >
            <LinkedIn />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
