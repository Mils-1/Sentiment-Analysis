import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import axios from 'axios';
import SingleThread from './SingleThread';
import '../App.css';

export default class HotReddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotThreads: []
    };
  }
  async componentDidMount() {
    const res = await axios.get('/reddit/hot');
    console.log(res.data);
    this.setState({
      hotThreads: res.data
    });
  }
  render() {
    const { hotThreads } = this.state;
    if (!hotThreads.length) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="main-container">
          <Item.Group divided>
            {hotThreads.map(thread => {
              return <SingleThread {...thread} key={thread.id} />;
            })}
          </Item.Group>
        </div>
      );
    }
  }
}
