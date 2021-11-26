import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {MyWorks} from "./components/myWorks/MyWorks";
import {RemoteJob} from "./components/remoteJob/RemoteJob";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./footer/Footer.";

function App() {
  return (
    <div className="App">
        {/*<div className="stars">*/}
        {/*    <div id="stars"></div>*/}
        {/*    <div id="stars2"></div>*/}
        {/*    <div id="stars3"></div>*/}
        {/*</div>*/}
        <div className="container">

            <Header/>
            <About/>
            <Skills/>
            <MyWorks/>
            <RemoteJob/>
            <Contacts/>
            <Footer/>
        </div>

    </div>
  );
}

export default App;
