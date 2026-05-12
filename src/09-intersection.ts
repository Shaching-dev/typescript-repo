// the value must be everything from A and from B

type Inter1 = { id: string };
type Inter2 = { creadtedAt: Date };

type Entity = Inter1 & Inter2;

const e: Entity = { id: "e1", creadtedAt: new Date() };

// username + useremail

type User1 = { username: string };
type User2 = { userEmail: string };

type Entity1 = User1 & User2;

const user: Entity1 = {
  userEmail: "Shaching@gmail.com",
  username: "Shaching",
};
