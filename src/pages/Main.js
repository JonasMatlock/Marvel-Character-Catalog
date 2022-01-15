import React, { Component } from "react";
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import Banner from "../components/Banner/Banner";
import API from "../utilities/API";
import Gallery from "../components/Gallery/Gallery";

class Main extends Component {
  state = {
    selectedCharacter: "",
    characterArray: [],
    error: ""
  };

  

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ selectedCharacter: value });
  };

  handleFormSubmit = async event => {
    event.preventDefault();

    if (this.state.selectedCharacter === "") {
      this.setState({
        error: "Please enter a character name in the search bar!"
      });
      return;
    }

    const response = await API.searchCharacter(this.state.selectedCharacter);

    if (response.data.data.count === 0) {
      this.setState({
        error: `No Results! Are you sure that ${this.state.selectedCharacter} is a Marvel character?!?`
      });
      return;
    }

    if (
      this.state.characterArray.some(
        ({ name }) => name === response.data.data.results[0].name
      )
    ) {
      this.setState({
        error:
          "You have already searched for this character! Try a different one!"
      });
      return;
    }

    this.setState({
      characterArray: [
        ...this.state.characterArray,
        response.data.data.results[0]
      ]
    });

    this.setState({ error: "" });
  };

  removeCard = id => {
    const characterArray = this.state.characterArray.filter(
      character => character.id !== id
    );
    this.setState({ characterArray });
  };

  render() {
    console.log(this.state.characterArray)
    return (
      <div>
        <Banner />

        <Search
          value={this.state.selectedCharacter}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          errorMsg={this.state.error}
        />

     
          <Gallery>
            {this.state.characterArray.map(character => (
              <Card
                removeCard={this.removeCard}
                props={character}
                image={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                key={character.name}
                bio={character.description}
                name={character.name}
                id={character.id}
              />
            ))}
          </Gallery>
     
      </div>
    );
  }
}

export default Main;
