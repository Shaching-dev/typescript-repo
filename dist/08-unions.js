"use strict";
// unions ------
function printId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    else {
        return id.toFixed(2);
    }
}
// printId("hello");
console.log(printId(100));
