// -------------

// ts - type widening vs type literals

type Direction = "left" | "right";

function move(d: Direction) {
  console.log(d);
}

const d1 = "left";
move(d1);
let d2: Direction = "right";
move(d2);
