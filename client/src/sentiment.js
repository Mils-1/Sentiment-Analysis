const Sentiment = require('sentiment');
const sentiment = new Sentiment();

/** @param {array} data */
const createSentimentArr = data => {
  return data.map(comment => sentiment.analyze(comment));
};

const calculateRawScore = data => {
  return data.reduce((acc, comment) => acc + comment.score, 0);
};

/** @param {object} obj */
/** @param {array} tokenArr */
const addToObj = (obj, tokenArr) => {
  tokenArr.forEach(token => {
    token in obj ? obj[token]++ : (obj[token] = 1);
  });
};

const createArrFromTokenObj = tokenObj => {
  const arr = [];
  for (let token in tokenObj) {
    arr.push({ [token]: tokenObj[token] });
  }
  return arr;
};

const formatData = arr => {
  return arr.map(obj => ({
    text: Object.keys(obj)[0],
    value: Object.values(obj)[0]
  }));
};

/** @param {array} data */
const summarizeRawDataForSentiment = data => {
  const sentimentData = createSentimentArr(data);

  const totalScore = calculateRawScore(sentimentData);
  const avgScore = parseFloat(totalScore / data.length).toFixed(2);

  const positiveTokenObj = {};
  const negativeTokenObj = {};
  sentimentData.forEach(comment => {
    const { positive, negative } = comment;
    addToObj(positiveTokenObj, positive);
    addToObj(negativeTokenObj, negative);
  });

  const positiveTokenArr = createArrFromTokenObj(positiveTokenObj);
  const negativeTokenArr = createArrFromTokenObj(negativeTokenObj);

  const positiveD3TokenArr = formatData(positiveTokenArr);
  const negativeD3TokenArr = formatData(negativeTokenArr);

  const summarizedData = {
    totalScore,
    avgScore,
    positiveTokenObj,
    negativeTokenObj,
    positiveTokenArr,
    negativeTokenArr,
    positiveD3TokenArr,
    negativeD3TokenArr
  };

  return summarizedData;
};

export default summarizeRawDataForSentiment;
