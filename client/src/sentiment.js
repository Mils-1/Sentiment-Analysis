const Sentiment = require('sentiment');
const sentiment = new Sentiment();

/** @param {array} data */
const createSentimentDataArr = data => {
  return data.map(comment => sentiment.analyze(comment));
};

const calculateRawScore = data => {
  return data.reduce((acc, comment) => {
    return acc + comment.score;
  }, 0);
};

/** @param {array} data */
const formatDataForD3Cloud = data => {
  const sentimentData = createSentimentDataArr(data);
  const totalScore = calculateRawScore(sentimentData);
  console.log(`totalScore:`, totalScore);
  return sentimentData;
};

/*

const data = [
  { text: 'Hey', value: 1000 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 1000000 },
  { text: 'duck', value: 10 },
];

*/

export default formatDataForD3Cloud;
