import React from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
import './App.scss';

function App() {
  return (
    <section className='race-log-container'>
      <Header />
      <Form />
      <Results />
    </section>

  );
}

export default App;
