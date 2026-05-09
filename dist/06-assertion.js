"use strict";
// assertion in typescript
// const userDate = JSON.parse(jsonString) as { id: number; name: string };
// console.log(userDate);
//
const jsonString = `{"id": 1, "name": "helloChing"}`;
function isUser(v) {
    return (typeof v === "object" &&
        v !== null &&
        "id" in v &&
        typeof v.id === "number" &&
        "name" in v &&
        typeof v.name === "string");
}
const dataParsing = JSON.parse(jsonString);
if (isUser(dataParsing)) {
    console.log(dataParsing);
}
