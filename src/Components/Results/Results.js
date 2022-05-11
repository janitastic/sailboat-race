import { useState } from 'react';
import './Results.scss';

const Results = () => {

  return (
    <article className='results-container'>
      <aside className='finish-times'>
        <h2>Finish Times</h2>
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

export default Results;