const transpose = function(matrix) {
  let newMatrix = [];
  for (let i =  0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      newMatrix[c][r] = matrix [r][c];
    }
  }
  return newMatrix;
};


const searchLines = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
};

const wordSearch = (letters, word) => {
  if (searchLines(letters, word)) {
    return true;
  }
  const transposedLetters = transpose(letters);
  if (searchLines(transposedLetters, word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;