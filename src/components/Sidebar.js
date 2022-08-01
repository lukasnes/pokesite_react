import "./Sidebar.css";
import homeImage from '../images/home.png';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <aside className={props.sidebarToggled ? "sidebar" : "sidebar open"}>
      <Link style={{textDecoration: 'none'}} to='/home'>
        <nav className="menu" id="home-link">
          <div className="link-desc">
            <img src={ homeImage } alt="" className="link-image" />
            <p className={`link-text home-text ${props.path === '/' ? "active" : ""} ${props.path === "/home" ? "active" : ""}`}>Home</p>
          </div>
          <div className={`link-underline ${props.path === '/' ? "active" : ""} ${props.path === "/home" ? "active" : ""}`} id="home-line"></div>
        </nav>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/pokedex">
        <nav className="menu" id="dex-link">
          <div className="link-desc">
            <img src={ homeImage } alt="" className="link-image" />
            <p className={`link-text dex-text ${props.path === '/pokedex' ? "active" : ""}`}>Pokédex</p>
          </div>
          <div className={`link-underline ${props.path === '/pokedex' ? "active" : ""}`} id="dex-line"></div>
        </nav>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/team">
        <nav className="menu" id="team-link">
          <div className="link-desc">
            <img src={ homeImage } alt="" className="link-image" />
            <p className={`link-text team-text ${props.path === '/team' ? "active" : ""}`}>Team Builder</p>
          </div>
          <div className={`link-underline ${props.path === '/team' ? "active" : ""}`} id="team-line"></div>
        </nav>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/battle">
        <nav className="menu" id="battle-link">
          <div className="link-desc">
            <img src={ homeImage } alt="" className="link-image" />
            <p className={`link-text battle-text ${props.path === '/battle' ? "active" : ""}`}>Battle Simulator</p>
          </div>
          <div className={`link-underline ${props.path === '/battle' ? "active" : ""}`} id="battle-line"></div>
        </nav>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/forum">
        <nav className="menu" id="forum-link">
          <div className="link-desc">
            <img src={ homeImage } alt="" className="link-image" />
            <p className={`link-text forum-text ${props.path === '/forum' ? "active" : ""}`}>Poké Forums</p>
          </div>
          <div className={`link-underline ${props.path === '/forum' ? "active" : ""}`} id="forum-line"></div>
        </nav>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/pages">
        <nav className="menu" id="ex-site-link">
          <div className="link-desc">
            <img src={ homeImage } alt="" className="link-image" />
            <p className={`link-text ex-site-text ${props.path === '/pages' ? "active" : ""}`}>Other Poké Pages</p>
          </div>
          <div className={`link-underline ${props.path === '/pages' ? "active" : ""}`} id="pages-line"></div>
        </nav>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/about">
        <nav className="menu" id="about-link">
          <div className="link-desc">
            <img src={ homeImage } alt="" className="link-image" />
            <p className={`link-text about-text ${props.path === '/about' ? "active" : ""}`}>About Us</p>
          </div>
          <div className={`link-underline ${props.path === '/about' ? "active" : ""}`} id="about-line"></div>
        </nav>
      </Link>
    </aside>
  );
};

export default Sidebar;
