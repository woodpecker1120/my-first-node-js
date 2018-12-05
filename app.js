'use strict';//node.jsではモジュールを使っているため無名関数で囲う必要はなし
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);