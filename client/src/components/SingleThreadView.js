import React, { Component } from 'react';
import axios from 'axios';
import formatDataForD3Cloud from '../sentiment';

export default class SingleThreadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  async componentDidMount() {
    const { subId } = this.props.match.params;
    const res = await axios.get(`/reddit/${subId}/comments`);
    console.log(res.data);
    const test = formatDataForD3Cloud(res.data);
    console.log(`test: `,test);
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
