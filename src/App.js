import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
// import Header from "./components/header";
import Display from "./components/display";
import Footer from "./components/footer";
import AvatarCard from "./components/AvatarCard";
import avatars from "./avatars";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//Randomizes Avatars Array
function randomCharacterArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    avatars,
    score: 0,
    topScore: 0,
    guessed: [],
    message: "Choose a character to begin."
  };

  resetState = () => {
    this.setState(prevState => ({
      avatars,
      score: 0,
      topScore: 0,
      guessed: [],
      message: "Choose a character to begin."
    }));
  };

  handleCharacterClick = element => {
    element.persist(); //remove later
    //timeout used due to animation of card click.
    let name = element.target.name;

    //Toggle guessed.
    this.setState(prevState => ({
      avatars: prevState.avatars.map(char => {
        if (char.name === name) {
          char.guessed = true;
        }
        return char;
      })
    }));

    console.log(this.state.avatars);

    //Randomize the characters
    setTimeout(() => {
      this.setState(prevState => ({
        avatars: randomCharacterArr(prevState.avatars)
      }));
    }, 400);
    //Set guessed state of characters
  };

  render() {
    return (
      <>
        <Navbar message={this.state.message} />
        <Display>
          {this.state.avatars.map(avatar => {
            return (
              <Grid key={avatar.id} item xs={3}>
                <Paper>
                  <AvatarCard
                    clickHandler={this.handleCharacterClick}
                    id={avatar.id}
                    name={avatar.name}
                    image={avatar.image}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Display>
        <Footer />
      </>
    );
  }
}

export default App;
