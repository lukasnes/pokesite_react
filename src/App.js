import "./App.css";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Team from './pages/Team';
import Battle from './pages/Battle';
import Forum from './pages/Forum';
import Pages from './pages/Pages';
import About from './pages/About';

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
        <Main sidebarToggled={sidebarToggled} path={path}>
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>
                <Route exact path="/team">
                    <Team />
                </Route>
                <Route exact path="/battle">
                    <Battle />
                </Route>
                <Route exact path="/forum">
                    <Forum />
                </Route>
                <Route exact path="/pages">
                    <Pages />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Routes>
        </Main>
      </main>
    </div>
  );
};

export default App;
