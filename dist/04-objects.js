"use strict";
//  object model with type alias
const user1 = {
    id: 1200,
    name: "Mongswe",
    age: 30,
    email: "mong@swe.com",
    createdAt: new Date(),
};
const user2 = {
    name: "Shaching",
    email: "shaching@marma.com",
    password: "hellojones",
};
const passportUser = {
    firstName: "shaching",
    lastName: "Marma",
    //   lastName: undefined,
    email: "shaching@marma.com",
    IdCardNo: 122432432432,
    district: "Rangamati",
    CreatedAt: new Date(),
    subDistrict: "Kaptai",
};
// passportUser.firstName = "Hellobro";
let mixedType; // union types
let unknownAPI;
const employeData = {
    name: "shaching",
    email: "shaching@gmail.com",
};
// console.log(employeData);
let middleName;
middleName = "shaching";
const userValue = {
    firstName: "Shaching",
    lastName: "Marma",
    email: "shaching@marma.com",
};
const count = {
    name: "shaching",
};
const profile = {
    likes: 12222,
    shares: 112321321,
    views: 10989889890,
    comment: "hello",
};
console.log(profile);
const user4 = {
    admin: true,
    editor: false,
    executor: true,
};
const colorObject = {
    red: true,
    blue: false,
    black: 1233213,
    teal: "Not Available",
};
console.log(colorObject);
