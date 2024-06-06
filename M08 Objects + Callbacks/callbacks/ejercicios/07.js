
  function filter(arrayOfStrings) {
    let newArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0] === 'a' || arrayOfStrings[i][0] === 'A') {
        newArray.push(arrayOfStrings[i]);
      }
    }
    return newArray;
  }
  

module.exports = filter;
