import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  card: {
    width: "100%"
  }
});

function AvatarCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea id="a">
        <CardMedia
          avatar={props.avatar}
          onClick={props.clickHandler}
          width="120"
          height="200"
          component="img"
          id={props.id}
          image={props.image}
          name={props.name}
        />
      </CardActionArea>
    </Card>
  );
}

export default AvatarCard;
