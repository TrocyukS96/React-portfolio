import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Header/>
            <About/>
            <Skills/>
        </div>

    </div>
  );
}

export default App;
