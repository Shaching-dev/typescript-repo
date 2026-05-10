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
function describeUser(user) {
    if (user.role === "admin") {
        console.log(user.permissions);
    }
    else {
        user.loyaltyPoints = 10;
    }
}
// using in operator find out the type of user
function describeUserWithInOperator(user) {
    if ("permissions" in user) {
        console.log(user.role);
    }
    else {
        console.log(user.loyaltyPoints);
    }
}
