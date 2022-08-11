import "./App.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="App">
      <header>
        <Header
          sidebarToggled={sidebarToggled}
          setSidebarToggled={setSidebarToggled}
        />
      </header>
      <aside>
        <Sidebar sidebarToggled={sidebarToggled} path={path} />
      </aside>
      <main>
        <Main sidebarToggled={sidebarToggled} path={path}/>
      </main>
    </div>
  );
};

export default App;
