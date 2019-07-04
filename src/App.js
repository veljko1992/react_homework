import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/Header";
import Presidents from "./components/Presidents";
import About from "./pages/About";
import Footer from "./layout/Footer";

import './index.css';

class App extends Component {
  getAbs() {
    return new Date().toLocaleTimeString();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Presidents} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
