import React, { Component } from 'react';
import axios from 'axios';

export default class SingleThreadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  async componentDidMount() {
    const { subId } = this.props.match.params;
    console.log(`this.props: `, this.props);
    const res = await axios.get(`/reddit/${subId}/comments`);
    console.log(res.data);
    this.setState({
      comments: res.data
    });
  }
  render() {
    const { comments } = this.state;
    if (!comments.length) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          d3.js stuff
        </div>
      );
    }
  }
}
