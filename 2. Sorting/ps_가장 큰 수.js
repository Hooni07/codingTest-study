/*
 * 프로그래머스 [가장 큰 수] -> 공통 문제
 * 2024.04.24.월
 */

function solution(numbers) {
  let result = numbers.map(numbers => String(numbers))
    .sort((a, b) => (b + a) - (a + b))  // ab 조합과 ba 조합중, sort를 하였을 때 큰 수를 오름차순 정렬(문자열 기준)
    .join("");

  return answer[0] === '0' ? '0' : answer;
}


console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))