/*
 * 프로그래머스 [폰켓몬] -> 공통 문제
 * 2024.05.09.목
 */

function solution(nums) {
  let answer = [];
  let max = nums.length / 2;

  for(let i = 0; i < nums.length; i++) {
    if(answer.length < max) {
      if(!answer.includes(nums[i])) {
        answer.push(nums[i]);
      }
    }
  }

  return answer.length;
}

console.log(solution([3, 1, 2, 3]));
solution([3, 3, 3, 2, 2, 4]);
solution([3, 3, 3, 2, 2, 2]);