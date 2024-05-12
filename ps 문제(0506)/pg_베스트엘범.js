/*
 * 프로그래머스 [완주하지 못한 선수] -> 공통 문제
 * 2024.05.09.목
 */

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for(let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

function solution2(participant, completion) {
  const map = new Map();

  for(let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);

  }

  for(let [k, v] of map) {
    if(v > 0) return k;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));