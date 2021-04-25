import React from "react";
import clsx from "clsx";
import resume from "../static/resume.pdf";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import WorkIcon from "@material-ui/icons/Work";
import WebIcon from "@material-ui/icons/Web";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  GitHub,
  LinkedIn,
  SettingsBrightness,
  Twitter,
} from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const drawerWidth = 240;

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
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            onClick={handleDrawerOpen}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Abas Farah
          </Typography>
          <Button color="inherit" href="https://github.com/abasnfarah">
            <GitHub />
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
          <Button color="inherit">
            <SettingsBrightness />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Home"} component="a" href="/">
            <ListItemIcon>
              <WebIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem
            button
            key={"Resume"}
            component="a"
            href={resume}
            target="_blank"
          >
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={"Resume"} />
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem
            button
            key={"Github"}
            component="a"
            href={"https://github.com/abasnfarah"}
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary={"GitHub"} />
          </ListItem>
          <ListItem
            button
            key={"Twitter"}
            component="a"
            href={"https://twitter.com/abasfarah"}
          >
            <ListItemIcon>
              <Twitter />
            </ListItemIcon>
            <ListItemText primary={"twitter"} />
          </ListItem>
          <ListItem
            button
            key={"LinkedIn"}
            component="a"
            href={"https://linkedin.com/in/abas-farah-92268682/"}
          >
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText primary={"LinkedIn"} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
