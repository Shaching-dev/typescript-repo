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
// processUser(process);
// practice as const concept
const items = ["a", "b", "c", "d"];
// console.log(items);
// const itemsConst =
const arr = ["hello", "hi", "robin"];
let socores = 100;
const routes = {
    home: "/",
    admin: "/admin",
    users: "/users",
};
routes.admin = "/helloching";
const goToRoute = (route) => {
    console.log(route);
};
// goToRoute("/users");
const useNumber = 100;
// let useNumber1 = 100;
// useNumber1 = 200;
const userRoles = ["hello", "hi", "bye"];
const colors = ["red", "green", "blue"];
const users = [
    { id: 1, role: "admin", active: true },
    { id: 2, role: "user", active: false },
    { id: 3, role: "moderator", active: true },
];
// type isActive = (typeof users)[number]["active"];
function assignRole(userId, newRole) {
    console.log(`Assigning ${newRole} to user ${userId}`);
}
assignRole(2, "admin");
