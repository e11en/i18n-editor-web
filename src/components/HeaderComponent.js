import { useState } from "react";
import { IconButton, Typography, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    top: 0,
    width: "calc(100vw - 1em)",
    display: "flex",
    padding: "0 0 0 1em",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className={classes.header}>
      <Typography variant="h6" className={classes.title}>
        i18n Editor
      </Typography>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>Connect to Github</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderComponent;
