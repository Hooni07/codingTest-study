/*
 * 프로그래머스 [이중우선순위큐] -> 공통 문제
 * 2024.05.23.목
 */

function solution(operations) {
  let answer = [];
  let minValue = 0;
  let maxValue = 0;
  let queue = [];
  for (let i = 0; i < operations.length; i++) {
    const arr = operations[i].split(" ");
    const cmd = arr[0];
    const num = Number(arr[1]);
    console.log(cmd, num);
  }

  return answer;
}

console.log("----<Test>----");
console.log(
  "기댓값: [0,0], 확인:",
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
console.log("----------------");
console.log(
  "기댓값: [333, -45], 확인:",
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
