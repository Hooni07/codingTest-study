/*
 * 프로그래머스 [타겟 넘버] -> 공통 문제
 * 2024.02.19.월
 */

function solution(numbers, target) {
  let node_num = 0;
  for (let i = 0; i < numbers.length; i++) {
    node_num += 2 ** i;
  }

  let graph = [...new Array(node_num + 1)].map(() => []);
  for (let i = 0; i < node_num - 1; i++) {
    const start = Number(input[i + 1].split(" ")[0]);
    const end = Number(input[i + 1].split(" ")[1]);
    graph[start].push(end);
    graph[end].push(start);
  }
  console.log(node_num);
  let answer = 0;
  return answer;
}

solution([1, 1, 1], 3);
