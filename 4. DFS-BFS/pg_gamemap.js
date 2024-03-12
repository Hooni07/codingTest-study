/*
 * 프로그래머스 [게임 맵 최단거리] -> 공통 문제
 * 2024.02.21.수
 */

function solution(maps) {
  let answer = 0;
  let N = maps.length;
  let M = maps[0].length;

  function bfs(x, y) {
    const positionQueue = [[x, y]];
    const result = [];
    const visisted = {};
    visisted[[x, y]] = 1;
    // 현재 위치로부터 동서남북 조회를 위한 dx, dy 배열
    let directionX = [0, 0, -1, 1];
    let directionY = [-1, 1, 0, 0];
    while (positionQueue.length) {
      for (let i = 0; i < positionQueue.length; i++) {
        let coord = positionQueue.shift();
        result.push(coord);
        for (let j = 0; j < 4; j++) {
          let searchX = coord[0] + directionX[j];
          let searchY = coord[1] + directionY[j];

          // (searchX >= 0 && searchY >= 0) && (searchX < N && searchY < M)
          // 탐색하는 좌표가 주어진 입력 범위 내에 위치하는 경우
          // !visisted[[searchX, searchY]] : 이전에 해당 좌표를 방문하지 않았을 경우
          // maps[nx][ny] === 1 : 탐색한 좌표가 유효한 좌표인 경우
          if (
            searchX >= 0 &&
            searchY >= 0 &&
            searchX < N &&
            searchY < M &&
            !visisted[[searchX, searchY]] &&
            maps[searchX][searchY] === 1
          ) {
            // 해당 좌표에 도달할때마다 visited 객체값을 증가시켜준다.
            // 최종 목적지에 도달하였을 때의 이동횟수
            visisted[[searchX, searchY]] = visisted[coord] + 1;
            positionQueue.push([searchX, searchY]);
          }
        }
      }
    }
    // 진영에 도달할 수 없는 경우 -> undefined로 반환하게 된다 -> -1 조건으로 변경
    if (visisted[[N - 1, M - 1]] === undefined) {
      return -1;
    }
    return visisted[[N - 1, M - 1]];
  }

  // (0, 0) 시작 => 게임 좌표 (1, 1)에서 시작
  answer = bfs(0, 0);

  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
