const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(...num1, 1200, 400);

// rest parameter

function sumAllNumbers(...num: number[]): number {
  return num.reduce((s, n) => s + n, 0);
}

// console.log(sumAllNumbers(2, 3, 4, 5, 6, 7, 8));

// rest tuples----->

function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step] = args;
  const out: number[] = [];
  for (let n = start; n <= end; n += step ?? 0) out.push(n);

  return out;
}

function draw(a: number, b: number) {
  console.log(a + b);
}

const fixedPoint = [10, 20] as const;
draw(...fixedPoint);
