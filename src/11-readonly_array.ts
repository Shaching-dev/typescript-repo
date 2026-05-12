// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8] as const;

// normal way
const arrs: readonly number[] = [1, 2, 3, 4, 5];
// generic
const ys: ReadonlyArray<number> = [1213, 4234, 5435, 54645, 7657];

const xss = [1, 2, 3, 4, 5, 6, 76];
xss[0] = 12000; //mutable

//

function sum(nums: readonly number[]): number {
  let sum = 0;
  for (const n of nums) sum += n;
  return sum;
}

const readArr: ReadonlyArray<number> = [1, 2, 3, 4, 5];
console.log(sum(xss)); // passing mutable array in readonly params ---

const mutable: number[] = [1, 2, 4, 5, 6, 7];
const readOnlyArr: readonly number[] = mutable;

// i can enforce to behave readonly to a mutable array but the opposite will not work
