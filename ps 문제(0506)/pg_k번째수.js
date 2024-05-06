/*
 * 프로그래머스 [k번째 수] -> 공통 문제
 * 2024.05.07.월
 */

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
