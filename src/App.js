import React from 'react';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import RaceLogs from './Components/Results/RaceLogs';
import FinishTimes from './Components/Results/FinishTimes';
import './App.scss';

const App = () => {
  const [loggedRaces, setLoggedRaces] = useState([]);

  const getResults = (input) => {
    setLoggedRaces([...loggedRaces, input])
    return loggedRaces
  }

  return (
    <section className='race-log-container'>
      <Header />
      <Form getResults={getResults} />
      <article className='results-container'>
          <RaceLogs loggedRaces={loggedRaces} />
          <FinishTimes loggedRaces={loggedRaces}/>
      </article>
    </section>
  );
}

export default App;
