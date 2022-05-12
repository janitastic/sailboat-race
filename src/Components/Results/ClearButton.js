const ClearButton = ({ clearResults }) => {
  <article className='button-container'>
    <button type='reset' onClick={() => {clearResults()}}>
      Clear Results
    </button>
  </article>
}

export default ClearButton;