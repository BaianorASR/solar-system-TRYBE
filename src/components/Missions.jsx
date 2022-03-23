import React from 'react';
import Tilty from 'react-tilty';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Missions.css';

const Missions = () => (
  <div data-testid="missions" className="missions">
    <Title headline="Missões" />
    <div className="cards-container">
      {missions.map((ms) => (
        <Tilty key={ ms.name } scale={ 1.10 }>
          <MissionCard
            name={ ms.name }
            year={ ms.year }
            country={ ms.country }
            destination={ ms.destination }
          />
        </Tilty>
      ))}
    </div>
  </div>
);

export default Missions;
