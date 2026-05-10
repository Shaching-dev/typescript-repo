"use strict";
const ROLES = ["admin", "user", "opeartor"];
// type Role = (typeof ROLES)[number];
// function setRole(r: Role) {
//   console.log(r);
// }
// setRole("admin");
const users10 = [
    {
        id: 1,
        name: "shaching",
        role: "admin",
        isActive: true,
    },
    {
        id: 2,
        name: "aongswe",
        role: "operator",
        isActive: true,
    },
    {
        id: 3,
        name: "mongswe",
        role: "user",
        isActive: true,
    },
    {
        id: 4,
        name: "miprue",
        role: "user",
        isActive: true,
    },
];
function setRoles(userId, name, role) {
    console.log(`${name} is now ${role} and his/her id is ${userId}`);
}
setRoles(2, "miprue", "admin");
