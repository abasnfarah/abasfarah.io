import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles({
  bottom: {
    width: 500,
    postion: "fixed",
    bottom: 0,
  },
});

export default function BottomBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.bottom}
    >
      <BottomNavigationAction
        label="Abas Farah 2021"
        icon={<CopyrightIcon />}
      />
    </BottomNavigation>
  );
}
