import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: [] }
  async componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
    // const res = await fetch('/users');
    // const users = await res.json();
    // this.setState({ users });
  }
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <ul>
        {users.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
