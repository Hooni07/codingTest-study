/*
 * 프로그래머스 [문자열 압축] -> 공통 문제
 * 2024.04.15.월
 */

function solution(s) {
  let answer = s.length;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let tempStr = "";
    let index = 0;

    while (index < s.length) {
      let count = 1;
      // 뒤에 똑같은 문자열이 있는경우 count 증가 및 반복
      // 반복되지 않는 경우, 해당 구간에 대한 압축 종료
      while (s.slice(index, index + i) === s.slice(index + i, index + i + i)) {
        count++;
        index += i;
      }

      if (count > 1) {
        tempStr += count;
      }
      const str = s.slice(index, index + i);
      tempStr = tempStr + str;
      index += i;
    }
    answer = Math.min(answer, tempStr.length);
  }

  return answer;
}
