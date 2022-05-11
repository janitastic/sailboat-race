import { useState } from 'react';
import './Results.scss';
import FinishTimes from './FinishTimes';

const RaceLogs = ({ loggedRaces }) => {
  console.log('loggedRaces', loggedRaces)
  let loggedRace = loggedRaces.map((raceTime) => 
    <li key={raceTime}>
      {raceTime}
    </li>
  )

  return (
    <>
      <h2>Race Logs</h2>
      <ol>{loggedRace}</ol>
    </>
  )
}

export default RaceLogs;