import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { sizing } from "@material-ui/system";
import MyAvatar from "./MyAvatar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    maxHeight: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "100vh",
    width: "25vh",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Navigation Side Bar"
        className={classes.tabs}
        centered={true}
      >
        <Box p={9}>
          <MyAvatar />
        </Box>
        <Box pt={10}></Box>

        <Tab label="Home" {...a11yProps(2)} />
        <Tab label="About" {...a11yProps(3)} />
        <Tab label="Resume" {...a11yProps(4)} />
        <Tab label="Blog" {...a11yProps(5)} />
        <Tab label="Contact Me" {...a11yProps(6)} />
        <Box pt={30}></Box>
        <Box pt={30}>
          Copyright © 2021 <Box pt={2}></Box>
          <Button
            variant="contained"
            color="primary"
            href="https://www.twitter.com/abasfarah"
          >
            @Abas Farah
          </Button>
        </Box>
      </Tabs>
      <TabPanel value={value} index={2}>
        Home
      </TabPanel>
      <TabPanel value={value} index={3}>
        About
      </TabPanel>
      <TabPanel value={value} index={4}>
        Resume
      </TabPanel>
      <TabPanel value={value} index={5}>
        Blog
      </TabPanel>
      <TabPanel value={value} index={6}>
        Contact Me
      </TabPanel>
    </div>
  );
}
