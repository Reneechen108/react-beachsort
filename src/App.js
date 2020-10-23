import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home';
import Houses from './pages/Houses';
import SingleHouse from './pages/SingleHouse';
import Error from './pages/Error';
import Other from './pages/Other';
import Login from './pages/Login'

import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";


class App extends Component{
  render(){
      return (
        <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/houses/" component={Houses} />
          <Route exact path="/houses/:id" component={SingleHouse} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/other/" component={Other} />
          <Route component={Error} />
        </Switch>
        </>
      );
  }
}

export default App;
