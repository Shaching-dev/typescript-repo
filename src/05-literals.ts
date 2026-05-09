// -------------

// ts - type widening vs type literals

type Direction = "left" | "right";

function move(d: Direction): void {
  console.log(d);
}

// when i declare variable with const ts assumes that this will never change but when i declare let ts thinks that it will change later and it widens the type

const d1 = "left";
move(d1);
let d2: Direction = "right";
move(d2);
