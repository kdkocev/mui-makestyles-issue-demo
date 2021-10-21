import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  someLayoutButtonClassName: { textTransform: "uppercase" },
});

const PageLayout: React.FC<{}> = ({ children }) => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const classes = useStyles();

  const handleChange = useCallback(
    (value) => {
      history.push(value);
      setValue(value);
    },
    [history]
  );

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleChange(newValue);
        }}
      >
        <BottomNavigationAction
          value="/home"
          label="Home"
          className={classes.someLayoutButtonClassName}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="/friends"
          label="Friends"
          className={classes.someLayoutButtonClassName}
          icon={<GroupIcon />}
        />
        <BottomNavigationAction
          value="/messages"
          label="Messages"
          className={classes.someLayoutButtonClassName}
          icon={<MessageIcon />}
        />
        <BottomNavigationAction
          value="/profile"
          label="Profile"
          className={classes.someLayoutButtonClassName}
          icon={<PersonIcon />}
        />
      </BottomNavigation>
      <Box sx={{ width: 600, margin: "50px auto" }}>{children}</Box>
    </Box>
  );
};

export default PageLayout;
