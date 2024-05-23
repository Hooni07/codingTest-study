/*
 * 프로그래머스 [디스크 컨트롤러] -> 공통 문제
 * 2024.05.21.화
 */

function solution(jobs) {
  let answer = 0;
  let index = 0;
  let now = 0;
  let sum = 0;
  const length = jobs.length;

  jobs.sort((a, b) => a[0] - b[0]);

  const waiting = [];

  while (index < jobs.length || waiting.length > 0) {
    if (index < jobs.length && now >= jobs[index][0]) {
      waiting.push(jobs[index]);
      index += 1;

      waiting.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (!waiting.length) {
      now = jobs[index][0];
    } else {
      const first = waiting.shift();
      sum += now - first[0] + first[1];

      now += first[1];
    }
  }

  answer = Math.floor(sum / length);

  return answer;
}

console.log("----<Test>----");
console.log(
  "기댓값: 9, 확인:",
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
console.log("----------------");
