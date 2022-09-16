import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const convertToSpecialFormat = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    const {
      id, name, type, base_experience,
    } = this.props;
    const imgUrl = `${POKE_API}${convertToSpecialFormat(id)}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{name}</h2>
        <img src={imgUrl} alt={name} />
        <p>
          Type:
          {type}
        </p>
        <p>
          EXP:
          {base_experience}
        </p>
      </div>
    );
  }
}

export default Pokecard;
