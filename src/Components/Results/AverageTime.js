import { useState, useEffect } from 'react';

const AverageTime = ({ finishTimes }) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    let totalTime = finishTimes.reduce((totalTime, time) => {
      totalTime += time
      return totalTime
    }, 0)

    if (!finishTimes.length) {
      setAverage(0)
    } else {
      setAverage(
        Math.round(totalTime/finishTimes.length)
      )
    }
  }, [finishTimes])
    return (
      <>
        <h2>Overall Average</h2>
        <h3>{average} minutes</h3>
      </>
    )
}

export default AverageTime;