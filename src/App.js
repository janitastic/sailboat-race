import React from 'react';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
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
    return (
      <Results loggedRaces={loggedRaces} clearResults={clearResults}/>
    )
  }

  return (
    <main>
      <Header />
      <Form getResults={getResults} />
      {displayResults()}
    </main>
  );
}

export default App;
