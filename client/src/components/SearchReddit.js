import React, { Component } from 'react';
import axios from 'axios';

export default class SearchReddit extends Component {
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
      <div>Search Input form</div>
    )
  }
}

