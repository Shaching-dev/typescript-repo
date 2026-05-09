type Check = {
  id: number;
  name: string;
};

function isValidate(data: unknown): data is Check {
  return (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    typeof (data as any).name === "string" &&
    "id" in data &&
    typeof (data as any).id === "number"
  );
}

function processUser(data: unknown) {
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

const arr = ["hello", "hi", "robin"] as const;

let socores = 100 as const;

const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
};

routes.admin = "/helloching";

const goToRoute = (route: "/" | "/admin" | "/users") => {
  console.log(route);
};

goToRoute("/users");

const useNumber = 100;
// let useNumber1 = 100;
// useNumber1 = 200;

const userRoles = ["hello", "hi", "bye"] as const;

let color1 = "red";
let color = "red" as const;
