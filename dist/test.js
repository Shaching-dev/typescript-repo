"use strict";
function isValidate(data) {
    return (typeof data === "object" &&
        data !== null &&
        "name" in data &&
        typeof data.name === "string" &&
        "id" in data &&
        typeof data.id === "number");
}
function processUser(data) {
    if (!isValidate(data)) {
        throw new Error("Invalid user data");
    }
    console.log(data.name);
}
const jsnData = `{"id": 1, "name": "hello"}`;
const process = JSON.parse(jsnData);
processUser(process);
