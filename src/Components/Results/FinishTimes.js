import { useState } from 'react';
import './Results.scss';

const FinishTimes = ({ finishTimes }) => {
  console.log(finishTimes)
  let completedTimes = finishTimes.map((time) => 
    <li key={time}>
      {time}
    </li>
  )

  return (
    <article className='results-container'>
      <aside className='finish-times'>
        <h2>Finish Times</h2>
        <ol>{completedTimes}</ol>
      </aside>
      <aside className='total-minutes'>
        <h2>Completion Time</h2>
      </aside>
      <aside className='overall-average'>
        <h2>Overall Average</h2>
      </aside>
    </article>
  )
}

export default FinishTimes;