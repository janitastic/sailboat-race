const HourSelector = ({ handleChange }) => {
  let options = Array.from(new Array(12).fill(1, 0));
  options = options.map((option, i) => {
    if (i < 9) {
      option = `0${i + 1}`
    } else {
      option = i + 1
    }
    return <option key={i} value={i + 1}>{option}</option>
  });

  return (
    <select className='input-field' name='hours' type='number' aria-label='hour selection' onChange={(e) => handleChange(e)}>
      <option>Hour</option>
      {options}
    </select>
  )
};

export default HourSelector;