import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import HotReddit from './components/HotReddit';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Route path="/home" component={HotReddit} />
        <Route path="/about" component={HotReddit} />
        <Route path="/search" component={HotReddit} />
      </div>
    );
  }
}
