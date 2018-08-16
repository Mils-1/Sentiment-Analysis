import React, { Component } from 'react';
import axios from 'axios';

export default class HotReddit extends Component {
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
    const { redditHotThreads } = this.state;
    if (!redditHotThreads.length) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          mapped stuff
        </div>
      )
    }
  }
}

