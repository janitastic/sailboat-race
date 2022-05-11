import { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [userInput, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setInput('');
  }

  return (
    <article className='form-container'>
      <label>Race Time</label>
      <form onSubmit={handleSubmit}>
        <input type='text' 
          onChange={e => setInput(e.target.value)}
          value={userInput}
        />
        <button type='submit'>Submit</button>
      </form>
    </article>
  )
}

export default Form;