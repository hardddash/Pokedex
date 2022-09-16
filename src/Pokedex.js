import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        {this.props.characters.map((character) => (
          <Pokecard
            id={character.id}
            name={character.name}
            type={character.type}
            base_experience={character.base_experience}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
