import './Header.css';
import { useState } from 'react';
import pokeLogo from '../images/poke_logo.png';

const Header = () => {
    const [isToggled, toggle] = useState(false)

    const toggleSandwich = (evt) => {
        let button = evt.target
        isToggled ? toggle(false) : toggle(true)
        
        button.classList.contains('sandwich-btn') ? button = button : button = button.parentNode
        isToggled ? button.classList.add('open') : button.classList.remove('open')
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