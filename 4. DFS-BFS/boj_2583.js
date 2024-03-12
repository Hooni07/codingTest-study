/*
 * 백준 2583번 [영역 구하기]
 * 2024.03.11.월
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj2583.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [M, N, K] = input[0].split(" ").map(Number);
// 그린 영역 X => false, 그린 영역 O => ture
const paper = [...Array(M)].map(() => Array(N).fill(false));

// 입력된 직사각형의 좌표를 바탕으로, 그려진 영역 true로 변경
for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let y = M - y2; y < M - y1; y++) {
    for (let x = x1; x < x2; x++) {
      paper[y][x] = true;
    }
  }
}

// x, y 방향으로 1, -1 씩 이동하는 것을 나타내는 offsets
const offset = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const dfs = (start) => {
  const stack = [start];
  let area = 0;
  while (stack.length) {
    const [x, y] = stack.pop();
    area++;
    // 인접 영역에 대해 칠해지지 않았는지 판단
    for (let i = 0; i < 4; i++) {
      const nx = x + offset[i][0];
      const ny = y + offset[i][1];
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !paper[nx][ny]) {
        paper[nx][ny] = true;
        stack.push([nx, ny]);
      }
    }
  }
  return area;
};

// 칠해지지 않은 영역 section에 대한 넓이 구하기
const areas = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!paper[i][j]) {
      paper[i][j] = true;
      areas.push(dfs([i, j]));
    }
  }
}

areas.sort((a, b) => a - b);

console.log(areas.length);
let result = "";
for (let i = 0; i < areas.length; i++) {
  if (i === areas.length - 1) {
    result = result + areas[i];
  } else {
    result = result + areas[i] + " ";
  }
}
console.log(result);
