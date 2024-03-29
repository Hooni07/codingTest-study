/*
 * 백준 8911번 [거북이]
 * 2024.03.29.금
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj8911.txt"
  )
  .toString()
  .split("\n");

let T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const move = input[i + 1];
  let start = [0, 0];
  let movePoint = [0, 1];
  let minX = 0;
  let minY = 0;
  let maxX = 0;
  let maxY = 0;
  for (let j = 0; j < move.length; j++) {
    if (move[j] === "L") {
      let temp = movePoint.slice();
      movePoint[0] = -temp[1];
      movePoint[1] = temp[0];
    } else if (move[j] === "R") {
      let temp = movePoint.slice();
      movePoint[0] = temp[1];
      movePoint[1] = -temp[0];
    } else if (move[j] === "F") {
      start[0] += movePoint[0];
      start[1] += movePoint[1];
    } else if (move[j] === "B") {
      start[0] -= movePoint[0];
      start[1] -= movePoint[1];
    }

    minX = Math.min(minX, start[0]);
    minY = Math.min(minY, start[1]);
    maxX = Math.max(maxX, start[0]);
    maxY = Math.max(maxY, start[1]);
  }
  const width = maxX - minX;
  const height = maxY - minY;
  const area = width * height;
  console.log(area);
}
