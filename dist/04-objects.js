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
    //   lastName: "Marma",
    email: "shaching@marma.com",
    IdCardNo: 122432432432,
    district: "Rangamati",
    CreatedAt: new Date(),
};
let mixedType; // union types
let unknownAPI;
