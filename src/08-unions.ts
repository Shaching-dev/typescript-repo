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
