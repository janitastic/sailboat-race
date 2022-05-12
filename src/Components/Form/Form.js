import { useState } from 'react';
import './Form.scss';

const Form = ({ getResults }) => {
  const [userInput, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    getResults(userInput)
    setInput('')
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