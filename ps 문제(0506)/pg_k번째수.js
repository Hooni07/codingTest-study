/*
 * 프로그래머스 [k번째 수] -> 공통 문제
 * 2024.05.07.월
 */

function solution(array, commands) {
  let answer = [];
  for (var i = 0; i < commands.length; i++) {
    let select = array.slice(commands[i][0] - 1, commands[i][1]);

    select.sort((a, b) => a - b);

    answer.push(select[commands[i][2] - 1]);
  }
  return answer;
}
