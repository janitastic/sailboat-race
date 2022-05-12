const MinuteSelector = ({ handleChange }) => {
  let options = Array.from(new Array(60).fill(1, 0));
  options = options.map((option, i) => {
    if (i < 10) {
      option = `0${i}`
    } else {
      option = i
    }
    return <option key={i} value={i}>{option}</option>
  })

  return (
    <select className='input-field' name='minutes' type='number' aria-label='minutes selection' onChange={(event) =>handleChange(event)}>
      <option>Minutes</option>
      {options}
    </select>
  )
};

export default MinuteSelector;