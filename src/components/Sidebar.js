import "./Sidebar.css";
import homeImage from '../images/home.png';

const Sidebar = (props) => {
  return (
    <aside className={props.sidebarToggled ? "sidebar" : "sidebar open"}>
      <nav className="menu" id="home-link">
        <div className="link-desc">
          <img src={ homeImage } alt="" className="link-image" />
          <p className="link-text home-text">Home</p>
        </div>
        <div className="link-underline" id="home-line"></div>
      </nav>

      <nav className="menu" id="dex-link">
        <div className="link-desc">
          <img src={ homeImage } alt="" className="link-image" />
          <p className="link-text dex-text">Pokédex</p>
        </div>
        <div className="link-underline" id="dex-line"></div>
      </nav>

      <nav className="menu" id="team-link">
        <div className="link-desc">
          <img src={ homeImage } alt="" className="link-image" />
          <p className="link-text team-text">Team Builder</p>
        </div>
        <div className="link-underline" id="team-line"></div>
      </nav>

      <nav className="menu" id="battle-link">
        <div className="link-desc">
          <img src={ homeImage } alt="" className="link-image" />
          <p className="link-text battle-text">Battle Simulator</p>
        </div>
        <div className="link-underline" id="battle-line"></div>
      </nav>

      <nav className="menu" id="forum-link">
        <div className="link-desc">
          <img src={ homeImage } alt="" className="link-image" />
          <p className="link-text forum-text">Poké Forums</p>
        </div>
        <div className="link-underline" id="forum-line"></div>
      </nav>

      <nav className="menu" id="ex-site-link">
        <div className="link-desc">
          <img src={ homeImage } alt="" className="link-image" />
          <p className="link-text ex-site-text">Other Poké Pages</p>
        </div>
        <div className="link-underline" id="pages-line"></div>
      </nav>

      <nav className="menu" id="about-link">
        <div className="link-desc">
          <img src={ homeImage } alt="" className="link-image" />
          <p className="link-text about-text">About Us</p>
        </div>
        <div className="link-underline" id="about-line"></div>
      </nav>
    </aside>
  );
};

export default Sidebar;
