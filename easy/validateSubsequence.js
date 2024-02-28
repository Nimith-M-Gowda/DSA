function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] == sequence[sequenceIndex]) sequenceIndex += 1;
    arrayIndex += 1;
  }
  return sequenceIndex == sequence.length;
}

console.log(isValidSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9], [8, 9]));
