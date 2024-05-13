/*
 * 프로그래머스 [기능개발] -> 공통 문제
 * 2024.05.13.월
 */

function solution(progresses, speeds) {
  let answer = [];
  let day = 0;

  while (progresses.length !== 0) {
    let count = 0;
    day++;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (i === 0) {
        if (progresses[i] >= 100) {
          count++;
          progresses.splice(0, 1);
          speeds.splice(0, 1);
          i--;
        }
      }
    }
    if (count > 0) {
      answer.push(count);
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
