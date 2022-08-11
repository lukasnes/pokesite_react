import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Team from './pages/Team';
import Battle from './pages/Battle';
import Forum from './pages/Forum';
import Pages from './pages/Pages';
import About from './pages/About';

export default (
  <Routes>
    <Route exact path="/" element={ <Home /> }/>
    <Route exact path="/pokedex" element={ <Pokedex /> }/>
    <Route exact path="/team" element={ <Team /> }/>
    <Route exact path="/battle" element={ <Battle /> }/>
    <Route exact path="/forum" element={ <Forum /> }/>
    <Route exact path="/pages" element={ <Pages /> }/>
    <Route exact path="/about" element={ <About /> }/>
    <Route path="/" element={ <Home /> }/>
  </Routes>
);
