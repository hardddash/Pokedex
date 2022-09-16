import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    const imgUrl = `${POKE_API}${id}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{name}</h2>
        <img src={imgUrl} alt={name} />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
