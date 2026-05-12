// unions ------

function printId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toFixed(2);
  }
}

// printId("hello");
// console.log(printId(100));

type Admin = { role: "admin"; permissions: string[] };
type Customer = { role: "customer"; loyaltyPoints: number };

function describeUser(user: Admin | Customer) {
  if (user.role === "admin") {
    console.log(user.permissions);
  } else {
    user.loyaltyPoints = 10;
  }
}

// using in operator find out the type of user

function describeUserWithInOperator(user: Admin | Customer) {
  if ("permissions" in user) {
    console.log(user.role);
  } else {
    console.log(user.loyaltyPoints);
  }
}

// array of unions and union of array

const arrOfUnion: (string | number)[] = ["hello", 1, 2, 3, 4, 5, 10];

const unionofArray: string[] | number[] =
  Math.random() > 0.1 ? ["hello", "hi by"] : [1, 2, 4, 5, 6];

console.log(unionofArray);
