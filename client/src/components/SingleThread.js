import React, { Component } from 'react';
import axios from 'axios';

export default class SingleThread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditHotThreads: []
    }
  }
  async componentDidMount() {
    const res = await axios.get('/reddit/hot');
    console.log(res.data);
    this.setState({
      redditHotThreads: res.data
    })
  }
  render() {
    return (
      <div>
        <h1>Provide a link to a reddit comment thread</h1>
        <input type='text'/>
      </div>
    )
  }
}

