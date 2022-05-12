import './Header.scss';
import logo from './logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} className='logo' alt='bitly logo'/>
      <h1>Bermuda Race Log</h1>
    </header>
  )
}

export default Header;