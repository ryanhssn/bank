import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Slider from "./components/Slider";
import Header from "./components/Header";
import History from "./components/History";
import Bank from "./components/Bank";
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
       <div>
            <Header />
            <Switch>
              <Route path="/bank" component={Bank} />
              <Route path="/history" component={History} />
              <Route path="/" component={Home} />
            </Switch>
        </div>
       
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
