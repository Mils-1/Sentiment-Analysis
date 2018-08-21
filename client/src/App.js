import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import HotReddit from './components/HotReddit';
import SearchReddit from './components/SearchReddit';
import SingleThreadView from './components/SingleThreadView';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={HotReddit} />
            <Route exact path="/about" component={HotReddit} />
            <Route exact path="/search" component={SearchReddit} />
            <Route exact path="/submissions/:subId" component={SingleThreadView} />
          </Switch>
        </main>
      </div>
    );
  }
}
