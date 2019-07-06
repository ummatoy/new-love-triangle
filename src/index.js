/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count = 0;
  // initializing lenght to prevent calculations in each iteration
  for (let i = 0, length = preferences.length; i < length; i++) {
      const cond1 = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
      const cond2 = i + 1 !== preferences[i];
      if (cond1 && cond2) {
          count++;
      }
  }
  return count / 3;

};
