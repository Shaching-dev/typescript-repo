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
processUser(process);
