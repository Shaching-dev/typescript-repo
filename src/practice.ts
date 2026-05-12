let value: String = new String("Hello");
// console.log(typeof value);

let data1: unknown = "Hello";

// if (typeof data1 === "string") {
//   console.log(data1.toUpperCase());
// }

let color1 = "red";
let color: "red" = "red";

type Status = "success" | "error" | "loading";
function getStatus(s: Status) {
  console.log(s);
}
// getStatus("error")

let value1: unknown = "hello";
// console.log((value1 as string).toUpperCase());

function printId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return "this is a number ";
  }
}

// printId("13213");
// console.log(printId(4234));

// type User = {
//   name: string;
// };

// type Admin = {
//   permissions: string[];
// };

// type AdminUser = User & Admin;

// const findRole: AdminUser = {
//   name: "Shaching",
//   permissions: ["User"],
// };

// Create an array that only stores numbers.

const numArray: number[] = [12, 33, 45, 56, 77, 88];

function greet(name?: string) {
  const getName = name ?? "not a string";
  return getName;
}

console.log(greet("Sha"));
