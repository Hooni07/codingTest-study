/*
 * 백준 14503번 [로봇 청소기]
 * 2024.04.05.금
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj14503.txt"
  )
  .toString()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let [r, c, d] = input.shift().split(" ").map(Number);
const arr = input.map((i) => i.split(" ").map(Number));
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let ans = 0;
let cnt = 0;

while (true) {
  // 왼쪽 방향으로의 회전이 4번 진행 되는 경우
  if (cnt === 4) {
    const [backx, backy] = [r + dx[(d + 6) % 4], c + dy[(d + 6) % 4]];
    // 뒤로 돌아갈 방향의 좌표에 대해 벽인 경우, 중단
    if (arr[backx][backy] === 1) {
      break;
    } else {
      r = backx;
      c = backy;
      cnt = 0;
    }
  }

  // 현재 위치 청소
  // 청소 => true, 청소가 완료된 좌표 => 2
  if (!visited[r][c]) {
    visited[r][c] = true;
    arr[r][c] = 2;
    ans++;
  }

  // 왼쪽 방향으로 회전
  const [leftx, lefty] = [r + dx[(d + 3) % 4], c + dy[(d + 3) % 4]];
  // 현재 위치의 바로 왼쪽에 아직 청소하지 않은 빈 공간이 존재하는 경우
  // 회전한 방향으로 한 칸 전진
  if (arr[leftx][lefty] === 0) {
    r = leftx;
    c = lefty;
    cnt = 0;
  } else {
    cnt++;
  }
  d = (d + 3) % 4;
}

console.log(ans);
