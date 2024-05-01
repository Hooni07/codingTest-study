/*
 * 프로그래머스 [구명보트] -> 공통 문제
 * 2024.04.17.수
 */

function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b - a);

  for(let i = 0, j = people.length - 1; i <= j; i++) {
    if(people[i] + people[j] <= limit)
      j--;
    answer++;
  }

  return answer;
}