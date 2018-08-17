import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import HotReddit from './components/HotReddit';
import SearchReddit from './components/SearchReddit';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={HotReddit} />
          <Route exact path="/about" component={HotReddit} />
          <Route exact path="/search" component={SearchReddit} />
        </Switch>
      </div>
    );
  }
}
