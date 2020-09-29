module.exports = function reverse (n) {
  let str = `${n}`,
    resultStr = '',
    resultNumber = 0;
  for (let i = 0; i < str.length; i++){
      resultStr = `${str[i]}${resultStr}`;
  };
  resultNumber = parseInt(resultStr);
  return resultNumber;
}
