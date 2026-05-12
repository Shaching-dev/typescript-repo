"use strict";
// return a function
function add(a, b) {
    return a + b;
}
// console.log(add(4237846, 334));
const num = [1, 2, 3, 4, 5, "uwhyuiw", "ujshuiwe"];
const setCon = num.map((d) => {
    if (typeof d === "number") {
        console.log(d * 2);
    }
    else {
        console.log(d.toUpperCase());
    }
});
function mapDistance(p) {
    return Math.hypot(p.x, p.y);
}
console.log(mapDistance({ x: 23213, y: 432432 }));
