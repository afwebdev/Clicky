import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    margin: "0 auto",
    maxWidth: "50%",
    marginTop: "2em"
  }
});

function Display(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {props.children}
      </Grid>
    </div>
  );
}

export default Display;
