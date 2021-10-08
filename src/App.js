import React, { Component } from "react";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import Phangnga from "./components/phangnga";
import Footer from "./components/footer";
import "./App.css";
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#acd1af";
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Route exact path="/bananamonday/" component={Intro} />
          <Route exact path="/bananamonday/phangnga" component={Phangnga} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
