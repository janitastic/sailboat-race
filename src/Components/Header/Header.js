import './Header.scss';
import logo from './logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} className='logo' alt='bitly logo'/>
    </header>
  )
}

export default Header;