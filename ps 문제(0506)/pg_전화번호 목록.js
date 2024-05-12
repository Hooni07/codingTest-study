/*
 * 프로그래머스 [전화번호 목록] -> 공통 문제
 * 2024.05.09.목
 */

function solution(phone_book) {
  let answer = true;
  phone_book.sort();
  for(let i = 0; i < phone_book.length - 1; i++) {
    if(phone_book[i + 1].includes(phone_book[i])) {
      if(phone_book[i][0] === phone_book[i + 1][0]) {
        return false;
      }
    }
  }
  return answer;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));