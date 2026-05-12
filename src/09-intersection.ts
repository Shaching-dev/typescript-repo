/* intersection type:
creates a new type that combines all the member from the types being intersected
*/

type Type1 = { userName: string; userEmail: string };
type Type2 = { id: number; isActive: boolean };

type TypeCombine = Type1 & Type2;

const checkTypes: TypeCombine = {
  id: 1200,
  userEmail: "sha@gmail.com",
  userName: "Shaching",
  isActive: true,
};

// console.log(checkTypes);

type A = {
  a: number;
  x: string;
};
type B = {
  b: boolean;
  x: string;
};

type AB = A & B;

const ABExplained: AB = {
  a: 123424,
  b: true,
  x: "hello",
};

type WithId = {
  id: string;
};

type WithTimestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type Entity = WithId & WithTimestamps;

function saveEntity<T extends Entity>(entity: T) {
  console.log(`Saving ${entity.id}, created at ${entity.createdAt}`);
}

saveEntity({
  createdAt: new Date(),
  id: "e2222",
  updatedAt: new Date(),
});
