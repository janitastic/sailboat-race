import React from 'react';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Results from './Components/Results/FinishTimes';
import './App.scss';

const App = () => {
  const [finishTimes, setFinishTimes] = useState([]);

  const getResults = (input) => {
    setFinishTimes([...finishTimes, input])
    return finishTimes
  }

  return (
    <section className='race-log-container'>
      <Header />
      <Form getResults={getResults} />
      <Results finishTimes={finishTimes} />
    </section>
  );
}

export default App;
