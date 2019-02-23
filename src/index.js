/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let lover1, 
      lover2;
  for(let i = 0; i<preferences.length; i++) {
    lover1 = preferences[i] - 1;
    lover2 = preferences[lover1] - 1;
    if(preferences[i] != preferences[lover1] && preferences[i] != preferences[lover2] && preferences[lover1] != preferences[lover2] && preferences[lover2] == i+1) {
      count++;
    }
  }
  return count/3;
};
