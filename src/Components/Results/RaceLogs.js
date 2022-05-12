import './Results.scss';

const RaceLogs = ({ loggedRaces }) => {
  let loggedRace = loggedRaces.map((raceTime) => 
    <li key={raceTime}>
      {raceTime}
    </li>
  )

  return (
    <aside className='race-logs'>
      <h2>Race Logs</h2>
      <ol>{loggedRace}</ol>
    </aside>
  )
}

export default RaceLogs;