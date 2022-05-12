const ClearButton = ({ clearResults }) => {
  return (
    <button type='reset' onClick={() => {clearResults()}}>
      Clear Results
    </button>
  )
}

export default ClearButton;