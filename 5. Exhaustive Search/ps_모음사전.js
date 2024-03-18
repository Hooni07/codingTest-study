/*
 * 프로그래머스 [모음사전] -> 공통 문제
 * 2024.03.18.월
 */

function solution(word) {
  let answer = word.length;
  const check = ["A", "E", "I", "O", "U"];
  const maxNums = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    const idx = check.indexOf(word[i]);
    console.log(idx);
    answer += idx * maxNums[i];
  }

  /*
  let answer = 0;
  const check = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  let findWord = '';
  
  for (let i=0; i < word.length; i++){
      for (let j=0; j < check.length; j++) {
          if (word[i] === check[j]){
              findWord += check[j];
              count++;
              break;
          } else {
              count++;
          }
      }
      console.log(count, findWord);
      if (findWord === word) {
          answer = count;
          break;
      }
  }
  */

  return answer;
}
