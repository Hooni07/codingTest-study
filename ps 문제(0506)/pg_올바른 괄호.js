/*
 * 프로그래머스 [올바른 괄호] -> 공통 문제
 * 2024.05.14.화
 */

function solution(s) {
  let count = 0;

  for(let i = 0; i < s.length; i++) {
    // if(i === 0 && s[i] === ")") {
    //   return false;
    // }

    // if(i === s.length - 1 && s[i] === "(") {
    //   return false;
    // }

    if(s[i] === "(") {
      count++;
    } else {
      count--;
    }

    if(count < 0) {
      return false;
    }
  }

  if(count !== 0) {
    return false;
  }

  return true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));