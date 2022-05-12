import './Results.scss';

const RaceLogs = ({ loggedRaces }) => {
  let loggedRace = loggedRaces.map((time, i) => {
    let hours;
    let minutes;

    if (time.hours < 10) {
      hours = `0${time.hours}`
    } else {
      hours = time.hours
    }

    if (time.minutes < 10) {
      minutes = `0${time.minutes}`
    } else {
      minutes = time.minutes
    }

    let raceTime = `${hours}:${minutes} ${time.period}, DAY ${time.day}`;

    
    return <li key={i}>
       {raceTime}
      </li>
  })

  return (
    <aside className='race-logs'>
      <h2>Race Logs</h2>
      <ol>{loggedRace}</ol>
    </aside>
  )
}

export default RaceLogs;