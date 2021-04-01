import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    maxHeight: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "30vh",
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function AvatarBar() {
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
        <MyAvatar />
      </Tabs>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
    </div>
  );
}
