import React, { Component } from 'react';
import axios from 'axios';
import WordCloud from 'react-d3-cloud';
import summarizeRawDataForSentiment from '../sentiment';

export default class SingleThreadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      d3Data: []
    };
  }
  async componentDidMount() {
    const { subId } = this.props.match.params;
    const res = await axios.get(`/reddit/${subId}/comments`);
    console.log(`res.data: `, res.data);
    const d3Data = summarizeRawDataForSentiment(res.data);
    console.dir(d3Data);
    this.setState({
      comments: res.data,
      d3Data: d3Data.positiveD3TokenArr
    });
  }
  render() {
    const { comments, d3Data } = this.state;
    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = word => word.value % 360;
    if (!comments.length) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <WordCloud
            data={d3Data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
          />
        </div>
      );
    }
  }
}
