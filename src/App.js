import React from 'react';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import RaceLogs from './Components/Results/RaceLogs';
import FinishTimes from './Components/Results/FinishTimes';
import ClearButton from './Components/Results/ClearButton';
import './App.scss';

const App = () => {
  const [loggedRaces, setLoggedRaces] = useState([]);

  const getResults = (input) => {
    setLoggedRaces([...loggedRaces, input])
    return loggedRaces
  }

  const clearResults = () => {
    setLoggedRaces([]);
  }

  const displayResults = () => {
    console.log(loggedRaces)
    if(!loggedRaces.length) {
      return (
        <p>No Races Logged</p>
      )
    } else {
      return (
        <>
          <RaceLogs loggedRaces={loggedRaces} />
          <FinishTimes loggedRaces={loggedRaces}/>
          <ClearButton clearResults={clearResults} />
        </>
      )
    }
  }

  return (
    <main>
      <Header />
      <Form getResults={getResults} />
      <article className='results-container'>
        {displayResults()}
      </article>
      {/* <ClearButton clearResults={clearResults} /> */}
      {/* <article className='button-container'>
        <button type='reset' onClick={() => {clearResults()}}>
          Clear Results
        </button>
      </article> */}
    </main>
  );
}

export default App;
