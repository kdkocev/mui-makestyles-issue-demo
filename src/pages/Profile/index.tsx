import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  someProfileClassName: { backgroundColor: "silver" },
});

const Profile: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box sx={{ padding: 2 }} className={classes.someProfileClassName}>
      Welcome to the Profile page!
    </Box>
  );
};

export default Profile;
