/*
 * 백준 10866번 [덱]
 * 2024.04.05.금
 */

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input_boj10866.txt"
  )
  .toString()
  .split("\n");

class Command {
  constructor() {
    this._arr = [];
  }
  push_front(data) {
    this._arr.unshift(data);
  }
  push_back(data) {
    this._arr.push(data);
  }
  size() {
    return this._arr.length;
  }
  pop_front() {
    return this.size() === 0 ? -1 : this._arr.shift();
  }
  pop_back() {
    return this.size() === 0 ? -1 : this._arr.pop();
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }
  front() {
    return this.size() === 0 ? -1 : this._arr[0];
  }
  back() {
    return this.size() === 0 ? -1 : this._arr[this.size() - 1];
  }
}

const N = Number(input[0]);
const cmd = new Command();
let result = [];
for (let i = 1; i <= N; i++) {
  let state = input[i].split(" ");
  switch (state[0]) {
    case "push_back":
      cmd.push_back(Number(state[1]));
      break;
    case "push_front":
      cmd.push_front(Number(state[1]));
      break;
    case "pop_front":
      result.push(cmd.pop_front());
      break;
    case "pop_back":
      result.push(cmd.pop_back());
      break;
    case "size":
      result.push(cmd.size());
      break;
    case "empty":
      result.push(cmd.empty());
      break;
    case "front":
      result.push(cmd.front());
      break;
    case "back":
      result.push(cmd.back());
  }
}

console.log(result.join("\n"));
