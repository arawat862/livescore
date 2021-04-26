import React from "react";
import './App.css';
import Header from "./layout/Header";
import { Content } from "./layout/Content";
import { Footer } from "./layout/Footer";
import Carouselcontainer from './layout/Carouselcontainer';
import Scoreboard from './layout/Scoreboard';
import Highlight from './layout/Highlight';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {

  return (
    
    <>
      
      <Header />
      <div className="App">
        <Carouselcontainer />
        </div>

        <div>
        <Scoreboard />
        </div>
        <Highlight />
      <Content />
      <Footer />
    </>

  );
}


export default App;
