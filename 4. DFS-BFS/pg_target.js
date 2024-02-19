/*
 * 프로그래머스 [타겟 넘버] -> 공통 문제
 * 2024.02.19.월
 */

function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(count, sum) {
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);
  return answer;
}

console.log(solution([4, 1, 2, 1], 2));
