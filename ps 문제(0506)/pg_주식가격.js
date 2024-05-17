/*
 * 프로그래머스 [주식가격] -> 공통 문제
 * 2024.05.17.금
 */

function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < prices.length; j++) {
      temp++;
      if (prices[j] < prices[i]) break;
    }
    answer.push(temp);
  }
  return answer;
}

console.log("----<Test>----");
console.log("기댓값: [4, 3, 1, 1, 0], 확인:", solution([1, 2, 3, 2, 3]));
console.log("----------------");
console.log("기댓값: [5, 4, 1, 2, 1, 0], 확인:", solution([1, 2, 3, 2, 3, 1]));
console.log("----------------");
