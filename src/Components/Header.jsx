import logo from '../logo.svg';
import Menu from './Menu';

function Header(props) {
    return (
        <header className='container'>
            <div><img src={logo} className='logo' alt='Logo' /></div>
            <nav><Menu /></nav>
        </header>
    )
}

export default Header;