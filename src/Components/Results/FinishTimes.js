import { useState, useEffect } from 'react';
import AverageTime from './AverageTime';

const FinishTimes = ({ loggedRaces }) => {
  const [finishTimes, setFinishTimes] = useState([]);

  let finishTime = finishTimes.map((finishTime) => 
    <li key={finishTime}>
      {finishTime} minutes
    </li>
  )

  useEffect(() => {
    setFinishTimes(
      loggedRaces.reduce((finishTimes, value) => {
        let input = value.split(' ');
        let time = input[0].split(':');

        let race = {
          hours: parseInt(time[0]),
          minutes: parseInt(time[1]),
          period: input[1],
          day: parseInt(input[3])
        }

        if (race.day > 1) {
          race.day -= 1
          race.day = race.day * 24 * 60
        } else {
          race.day = 0
        }

        if (race.period.includes('P') && race.hours < 12) {
          race.hours += 12
        }

        if (race.period.includes('A') && race.hours === 12) {
          race.hours = 0
        } else {
          race.hours = race.hours * 60
        }

        let finishTime = Math.round((race.hours + race.minutes + race.day - 480))

        finishTimes.push(finishTime)

        return finishTimes;
      }, [])
    )
  }, [loggedRaces])

  return (
    <>
      <aside className='finish-times'>
        <h2>Finish Times</h2>
        <ol>{finishTime}</ol>
      </aside>
      <aside className='overall-average'>
        <AverageTime finishTimes={finishTimes} />
      </aside>
    </>
  )
}

export default FinishTimes;