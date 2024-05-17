/*
 * 프로그래머스 [다리를 지나는 트럭] -> 공통 문제
 * 2024.05.17.금
 */

function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let onBridge = [];
  let passBridge = [];
  let truckCount = truck_weights.length;

  while (passBridge.length < truckCount) {
    // 다리 위에 truck이 한 대도 없는 경우
    if (onBridge.length === 0) {
      onBridge.push([truck_weights.shift(), 0]);
    }
    // 다리 위에 truck이 다리 길이보다 작거나 같은 경우
    else if (onBridge.length <= bridge_length) {
      let curSum = 0;
      for (let i = 0; i < onBridge.length; i++) {
        curSum += onBridge[i][0];
      }

      if (curSum + truck_weights[0] <= weight) {
        onBridge.push([truck_weights.shift(), 0]);
      }
    }
    // 1초마다 1씩 이동하도록 구현
    for (let i = 0; i < onBridge.length; i++) {
      onBridge[i][1]++;
    }

    // 다리 제일 앞에 있는 truck이 다리 끝에 도달한 경우
    if (onBridge[0][1] === bridge_length) {
      passBridge.push(onBridge.shift());
    }
    answer++;
  }

  return answer;
}

console.log("----<Test>----");
console.log("기댓값: 8, 확인:", solution(2, 10, [7, 4, 5, 6]));
console.log("----------------");
console.log("기댓값: 101, 확인:", solution(100, 100, [10]));
console.log("----------------");
console.log(
  "기댓값: 110, 확인:",
  solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
);
console.log("----------------");
console.log("기댓값: 21, 확인:", solution(10, 20, [10, 10, 10]));
console.log("----------------");
console.log(
  "기댓값: 20, 확인:",
  solution(10, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
);
console.log("----------------");
console.log(
  "기댓값: 21, 확인:",
  solution(10, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
);
console.log("----------------");
console.log(
  "기댓값: 3998, 확인:",
  solution(666, 444, [121, 331, 353, 154, 1, 422, 7, 8, 10, 120])
);
console.log("----------------");
console.log(
  "기댓값: 85, 확인:",
  solution(11, 111, [11, 1, 111, 11, 1, 1, 1, 111, 1, 111, 11, 11, 11, 1])
);
