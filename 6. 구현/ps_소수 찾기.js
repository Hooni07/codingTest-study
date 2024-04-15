/*
 * 프로그래머스 [소수 찾기] -> 공통 문제
 * 2024.04.03.수
 */

function solution(brown, yellow) {
  let answer = [];
  let area = brown + yellow;
  // 제한사항에 의해, width(w), hegith(h)의 최소 길이는 3부터 진행된다.
  let minWidth = 3;
  let minHeight = 3;

  for (let height = minHeight; height <= area / height; height++) {
    let width = Math.floor(area / height);
    let yellowWidth = width - 2;
    let yellowHeight = height - 2;
    if (yellowWidth * yellowHeight === yellow) {
      if (width * 2 + yellowHeight * 2 === brown) {
        answer.push(width, height);
      }
    }
  }
  return answer;
}
