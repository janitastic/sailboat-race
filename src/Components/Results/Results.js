import RaceLogs from './RaceLogs';
import FinishTimes from './FinishTimes';
import ClearButton from './ClearButton';

const Results = ({ loggedRaces, clearResults }) => {
  if (!loggedRaces.length) {
    return (
      <article className='no-results'>
        <p>Enter a completed race time and day above to view results.</p>
      </article>
    )
  } else {
    return (
      <>
        <article className='results-container'>
          <RaceLogs loggedRaces={loggedRaces} />
          <FinishTimes loggedRaces={loggedRaces}/>
        </article>
        <article className='button-container'>
          <ClearButton clearResults={clearResults} />
        </article>
      </>
    )
  }
}

export default Results;