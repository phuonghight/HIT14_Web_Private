const n = 7;
function pascalTriangle(n) {
  const result = [[1]];
  if (n == 1) return result;
  for (let i = 1; i < n; i++) {
    const preRow = result[i - 1];
    const curRow = [1];
    for (let j = 1; j < i; j++) {
      curRow.push(preRow[j - 1] + preRow[j]);
    }
    curRow.push(1);
    result.push(curRow);
  }
  return result;
}
console.log(pascalTriangle(n));
