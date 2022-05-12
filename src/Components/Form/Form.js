import { useState } from 'react';
import './Form.scss';
import HourSelector from './Inputs/HourSelector';
import MinuteSelector from './Inputs/MinuteSelector';
import Instructions from './Instructions';

const Form = ({ getResults }) => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputs.hours || !inputs.minutes || !inputs.period || !inputs.day) {
      displayError()
      return 
    } else {
      setError('')
      getResults(inputs)
      e.target.reset()
      setInputs({})
    }
  }

  const displayError = () => {
    setError(
      <p className='error-message'>*Please enter all fields.</p>
    )
  }

  return (
    <section className='form-instructions'>
      <Instructions />
      <article className='form-container'>
        <label>Completed Race Time</label>
        <form onSubmit={ handleSubmit }>
          <HourSelector handleChange={ (e) => handleChange(e) } />
          <MinuteSelector handleChange={ (e) => handleChange(e) } />
          <select className='input-field' name='period' type='text' aria-label='am/pm select' onChange={ (e) => handleChange(e) }>
            <option>AM/PM</option>
            <option value='AM'>AM</option>
            <option value='PM'>PM</option>
          </select>
          <input className='input-field' name='day' type='number' aria-label='day # input' min={0} max={365} placeholder='Day' onChange={ (e) => handleChange(e) } />
          <button type='submit'>Submit</button>
          {error}
        </form>
      </article>
    </section>
  )
}

export default Form;