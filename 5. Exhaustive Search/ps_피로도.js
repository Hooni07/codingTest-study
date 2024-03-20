/*
 * 프로그래머스 [피로도] -> 공통 문제
 * 2024.03.20.수
 */

function solution(k, dungeons) {
  let answer = -1;
  const visited = Array.from({ length: dungeons.length }, () => false);

  function DFS(hp, L) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;
        DFS(hp - dungeons[i][1], L + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, L);
  }

  DFS(k, 0);

  return answer;
}
