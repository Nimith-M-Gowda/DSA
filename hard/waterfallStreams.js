function waterfallStreams(array, source) {
  //add initial water on the source
  const initiateWater = (givenArray, source) => {
    givenArray[0][source] = -1;
    return givenArray;
  };

  //iterate on further rows and update water source
  const iterateOverArray = (array) => {
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        while (array[i - 1][j] !== 0 && array[i - 1][j] !== 1) {
          if (array[i][j] !== 1) {
            array[i][j] += array[i - 1][j];
            break;
          }
          if (array[i][j] === 1) {
            let left = j - 1;
            let right = j + 1;
            while (array[i][left] === 1) {
              if (left >= 0) {
                left -= 1;
              } else {
                break;
              }
            }
            while (array[i][right] === 1) {
              if (right < array[i].length) {
                right += 1;
              } else {
                break;
              }
            }

            if (left >= 0 && array[i - 1][j - 1] !== 1) {
              array[i][left] += array[i - 1][j] / 2;
            }
            if (right < array[i].length && array[i - 1][j + 1] !== 1) {
              array[i][right] += array[i - 1][j] / 2;
            }
            break;
          }
        }
      }
    }
    return array[array.length - 1];
  };

  const initiatedArray = initiateWater(array, source);
  const resultantArray = iterateOverArray(initiatedArray);

  return resultantArray.map((eachElement) =>
    eachElement !== 0 ? eachElement * -100 : eachElement
  );
}

const givenArray = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const source = 8;
console.log(
  "🚀 ~ waterfallStreams ~ waterfallStreams:",
  waterfallStreams(givenArray, source)
);
