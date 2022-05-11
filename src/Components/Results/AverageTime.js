import { useState, useEffect } from 'react';

const AverageTime = ({ loggedRaces }) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    setAverage(
      loggedRaces.reduce((finishTime, value) => {
        let input = value.split(' ');
        let time = input[0].split(':');

        let race = {
          hours: parseInt(time[0]),
          minutes: parseInt(time[1]),
          period: input[1],
          day: parseInt(input[3])
        }
        console.log(race)

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

        finishTime += Math.round((race.hours + race.minutes + race.day - 480) / loggedRaces.length)

        console.log(finishTime)
        return finishTime;
      }, 0)
    )
  }, [loggedRaces])
  console.log({average})
  return (
    <>
      <h2>Overall Average</h2>
        <h3>{average} minutes</h3>
    </>
  )
}

export default AverageTime;