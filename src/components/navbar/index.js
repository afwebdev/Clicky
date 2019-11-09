import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import "./navbar.css";

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  toolbar: {
    display: "flex"
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            ClickyClick
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {props.message}
          </Typography>
          <div className={classes.score}>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
