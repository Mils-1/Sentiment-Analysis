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
    const d3Data = summarizeRawDataForSentiment(res.data);
    console.dir(`d3Data: `, d3Data);
    this.positiveD3Data = d3Data.positiveD3TokenArr;
    this.negativeD3Data = d3Data.negativeD3TokenArr;
    this.setState({
      comments: res.data,
    });
  }
  render() {
    const { comments } = this.state;
    const fontSizeMapper = word => Math.log2(word.value) * 10;
    const rotate = word => word.value % 360;
    if (!comments.length) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <WordCloud
            data={this.positiveD3Data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
          />
          <WordCloud
            data={this.negativeD3Data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
          />
        </div>
      );
    }
  }
}
