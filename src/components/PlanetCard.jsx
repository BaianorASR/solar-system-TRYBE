import PropTypes from 'prop-types';
import React from 'react';
import '../styles/planetCard.css';

const PlanetCard = ({ planetName, planetImage }) => (
  <div data-testid="planet-card" className="card-planet">
    <p data-testid="planet-name">{planetName}</p>
    <img src={ planetImage } alt={ `Planeta ${planetName}` } />
  </div>
);

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
