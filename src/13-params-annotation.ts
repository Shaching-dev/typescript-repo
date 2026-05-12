// return a function

function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(4237846, 334));

const num = [1, 2, 3, 4, 5, "uwhyuiw", "ujshuiwe"];

const setCon = num.map((d) => {
  if (typeof d === "number") {
    console.log(d * 2);
  } else {
    console.log(d.toUpperCase());
  }
});

// const times2 = (n:number) => n * 2
// const fn = ()=> {}

type Point = { x: number; y: number };

function mapDistance(p: Point) {
  return Math.hypot(p.x, p.y);
}

console.log(mapDistance({ x: 23213, y: 432432 }));
