/*
 * 백준 1302번 [베스트셀러] -> 공통 문제
 * 2024.05.07.화
 */

const [N, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj1302.txt"
  )
  .toString()
  .trim()
  .split("\n");

let maxCount = 0;
let maxName = "";
const dict = {};
arr.forEach((name) => {
  if (dict[name]) {
    dict[name]++;
  } else {
    dict[name] = 1;
  }

  if (dict[name] === maxCount && name < maxName) {
    maxName = name;
  } else if (dict[name] > maxCount) {
    maxName = name;
    maxCount = dict[name];
  }
});
console.log(maxName);
