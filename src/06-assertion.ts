// assertion in typescript

// const userDate = JSON.parse(jsonString) as { id: number; name: string };
// console.log(userDate);

//

const jsonString = `{"id": 1, "name": "helloChing"}`;
type User11 = { id: number; name: string };

function isUser(v: unknown): v is User11 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
  );
}
const dataParsing = JSON.parse(jsonString);

if (isUser(dataParsing)) {
  console.log(dataParsing);
}
