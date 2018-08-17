import React, { Component } from 'react';
import axios from 'axios';

export default class HotReddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotThreads: []
    }
  }
  async componentDidMount() {
    const res = await axios.get('/reddit/hot');
    console.log(res.data);
    this.setState({
      hotThreads: res.data
    })
  }
  render() {
    const { hotThreads } = this.state;
    const myArr = hotThreads.map(thread => {
      return (
        <p>{thread.title}</p>
      )
    })
    if (!hotThreads.length) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          {myArr}
        </div>
      )
    }
  }
}

