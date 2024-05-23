/*
 * 프로그래머스 [이중우선순위큐] -> 공통 문제
 * 2024.05.23.목
 */

function solution(operations) {
  let answer = [];
  let minValue = Number.MAX_SAFE_INTEGER;
  let maxValue = Number.MIN_SAFE_INTEGER;
  let queue = [];
  for (let i = 0; i < operations.length; i++) {
    const arr = operations[i].split(" ");
    const cmd = arr[0];
    const num = Number(arr[1]);
    let isDelete = false;

    if (cmd === "I") {
      queue.push(num);
      queue.sort((a, b) => a - b);
      if (queue[queue.length - 1] >= maxValue) {
        maxValue = queue[queue.length - 1];
      }
      if (queue[0] <= minValue) {
        minValue = queue[0];
      }
    } else if (cmd === "D") {
      if (!isDelete) {
        if (queue.length === 0) {
          continue;
        } else {
          if (num === -1) {
            queue.shift();
            minValue = queue[0];
          } else if (num === 1) {
            queue.pop();
            minValue = queue[queue.length - 1];
          }
          isDelete = true;
          if (queue.length === 0) {
            maxValue = Number.MIN_SAFE_INTEGER;
            minValue = Number.MAX_SAFE_INTEGER;
          } else if (queue.length === 1) {
            maxValue = queue[0];
            minValue = queue[0];
          }
        }
      }
    }
  }

  if (maxValue === Number.MIN_SAFE_INTEGER) {
    answer.push(0);
  } else {
    answer.push(maxValue);
  }

  if (minValue === Number.MAX_SAFE_INTEGER) {
    answer.push(0);
  } else {
    answer.push(minValue);
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
