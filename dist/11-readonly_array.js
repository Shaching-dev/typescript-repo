"use strict";
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8] as const;
// normal way
const arrs = [1, 2, 3, 4, 5];
// generic
const ys = [1213, 4234, 5435, 54645, 7657];
const xss = [1, 2, 3, 4, 5, 6, 76];
xss[0] = 12000; //mutable
//
function sum(nums) {
    let sum = 0;
    for (const n of nums)
        sum += n;
    return sum;
}
const readArr = [1, 2, 3, 4, 5];
console.log(sum(xss)); // passing mutable array in readonly params ---
const mutable = [1, 2, 4, 5, 6, 7];
const readOnlyArr = mutable;
// i can enforce to behave readonly to a mutable array but the opposite will not work
