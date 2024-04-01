/*
 * 백준 8911번 [팰린드롬 만들기]
 * 2024.04.01.월
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj1213.txt"
  )
  .toString();

let count = [];

for (let i = 0; i < input.length; i++) {
  // a(A) = 0부터 시작
  const x = input.charCodeAt(i) - 65;
  if (count[x]) {
    count[x]++;
  } else {
    count[x] = 1;
  }
}

const oddChar = count.filter((v) => v % 2 != 0);

if (oddChar.length > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  let head = "";
  let body = "";
  let end = "";

  count.forEach((v, i) => {
    if (v % 2 != 0) {
      body += String.fromCharCode(i + 65);
      v--;
    }
    for (let k = 0; k < v / 2; k++) {
      head += String.fromCharCode(i + 65);
      end = String.fromCharCode(i + 65) + end;
    }
  });
  console.log(head + body + end);
}
