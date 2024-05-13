/*
 * 프로그래머스 [의상] -> 공통 문제
 * 2024.05.12.일
 */

function solution(clothes) {
  const clothesMap = {};
  let answer = 1;

  clothes.forEach((arr) => {
    const [clothesName, clothesType] = arr;
    if (clothesMap.hasOwnProperty(clothesType)) {
      clothesMap[clothesType]++;
    } else {
      clothesMap[clothesType] = 1;
    }
  });

  for (const key in clothesMap) {
    answer *= clothesMap[key] + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
