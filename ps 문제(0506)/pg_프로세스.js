/*
 * 프로그래머스 [프로세스] -> 공통 문제
 * 2024.05.14.화
 */

function solution(priorities, location) {
  let answer = 0;
  let max_value = Math.max(...priorities);
  let arr = [];
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  }

  while (priorities.length > 0) {
    max_value = Math.max(...priorities);

    if (priorities[0] < max_value) {
      priorities.push(priorities.shift());
      arr.push(arr.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (arr.shift() === location) {
        return answer;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log("----------------");
console.log(solution([1, 1, 9, 1, 1, 1], 0));
console.log("----------------");
console.log(solution([9, 8, 7, 8, 5], 0));
