import "./Sidebar.css";
import Images from '../images/Images';
import SidebarData from "./SidebarData";
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <aside className={props.sidebarToggled ? "sidebar" : "sidebar open"}>
      {SidebarData.map((sidebarObj) => {
        return (
          <Link style={{textDecoration: 'none'}} to={sidebarObj.path}>
            <nav className="menu" id={sidebarObj.navId}>
              <div className="link-desc">
                <img src={sidebarObj.icon} alt={sidebarObj.title} className="link-image"/>
                <p className={`link-text ${sidebarObj.pCName} ${props.path === sidebarObj.path ? "active" : ""}`}>{ sidebarObj.title }</p>
              </div>
              <div className={`link-underline ${props.path === sidebarObj.path ? "active" : ""}`} id={sidebarObj.lineId}></div>
            </nav>
          </Link>
        )
      })}
    </aside>
  );
};

export default Sidebar;
