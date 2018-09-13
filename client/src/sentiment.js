const Sentiment = require('sentiment');
const sentiment = new Sentiment();

/** @param {array} data */
const createSentimentArr = data => {
  return data.map(comment => sentiment.analyze(comment));
};

const calculateRawScore = data => {
  return data.reduce((acc, comment) => {
    return acc + comment.score;
  }, 0);
};

/** @param {object} obj */
/** @param {array} tokenArr */
const addToObj = (obj, tokenArr) => {
  tokenArr.forEach(token => {
    token in obj ? obj[token]++ : (obj[token] = 1);
  });
};

const createArrFromTokenObj = (tokenObj) => {
  const arr = [];
  for(let token in tokenObj) {
    arr.push({ [token]: tokenObj[token]} )
  }
  return arr;
}

const formatData = (arr) => {
  return arr.map(element => {
    console.log(element);
  })
}

/** @param {array} data */
const formatDataForD3Cloud = data => {
  const sentimentData = createSentimentArr(data);
  const totalScore = calculateRawScore(sentimentData);
  const avgScore = parseFloat(totalScore / data.length).toFixed(2);
  let positiveTokenObj = {};
  let negativeTokenObj = {};
  sentimentData.forEach(comment => {
    const { positive, negative } = comment;
    addToObj(positiveTokenObj, positive);
    addToObj(negativeTokenObj, negative);
  });
  const positiveTokenArr = createArrFromTokenObj(positiveTokenObj);
  const negativeTokenArr = createArrFromTokenObj(negativeTokenObj);


  console.log(`obj:`, {
    totalScore,
    avgScore,
    positiveTokenObj,
    negativeTokenObj,
    positiveTokenArr,
    negativeTokenArr
  });
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