import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../styles/SolarSystem.css';

const SolarSystem = () => (
  <div data-testid="solar-system" className="solar-system">
    <Title headline="Planetas" />
    <div className="planets-container">
      {Planets.map(({ name, image }) => (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      ))}
    </div>
  </div>
);

export default SolarSystem;
