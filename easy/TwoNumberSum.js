function TNSum(array, targetSum) {
  const sampleSet = new Set();
  for (const i of array) {
    const magicNumber = targetSum - parseInt(i);
    if (sampleSet.has(magicNumber)) return [parseInt(i), magicNumber];
    sampleSet.add(i);
  }
  return [];
}
console.log(TNSum([1, 2, 3, 4, 5], 8));
