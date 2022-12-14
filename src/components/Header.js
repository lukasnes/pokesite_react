import './Header.css';
import pokeLogo from '../images/logos/poke_logo.png';

const Header = (props) => {

    const toggleSandwich = (evt) => {
        let button = evt.target
        props.sidebarToggled ? props.setSidebarToggled(false) : props.setSidebarToggled(true)

        button.classList.contains('sandwich-btn') ? button = button : button = button.parentNode
        props.sidebarToggled ? button.classList.add('open') : button.classList.remove('open')
    }

    return (
        <header id="header">

            <button id="sidebar-btn" className="sandwich-btn" onClick={toggleSandwich}>
                <div className="wich-one"></div>
                <div className="wich-two"></div>
                <div className="wich-three"></div>
            </button>

            <div id="logo-box">
                <img src={pokeLogo} alt="Logo"/>
            </div>

            <nav className="account-links"></nav>

        </header>
    )
}

export default Header;