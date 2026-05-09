//  object model with type alias

type User = {
  id: number; // required property
  name: string;
  age: number;
  email?: string; // that means user might be absent if have that will be string.
  readonly createdAt: Date;
};

const user1: User = {
  id: 1200,
  name: "Mongswe",
  age: 30,
  email: "mong@swe.com",
  createdAt: new Date(),
};

/* while creating an object model here is something to understand

when you model like this 
name: string --- that means this property is required
email?: string that means that this field might be absent if present it will be be a string(that's not the union type)

*/

// console.log(user);
type registerModel = {
  name: string; // required
  email: string;
  password: string;
};

const user2: registerModel = {
  name: "Shaching",
  email: "shaching@marma.com",
  password: "hellojones",
};

type passposrtForm = {
  firstName: string; // required
  lastName?: string; // this field will be completely absent but if  it is present it will be with the specific types
  email: string;
  IdCardNo: number;
  district: string;
  readonly CreatedAt: Date;
  subDistrict: string;
};

const passportUser: passposrtForm = {
  firstName: "shaching",
  lastName: "Marma",
  //   lastName: undefined,
  email: "shaching@marma.com",
  IdCardNo: 122432432432,
  district: "Rangamati",
  CreatedAt: new Date(),
  subDistrict: "Kaptai",
};

// passportUser.firstName = "Hellobro";

let mixedType: string | undefined | number; // union types
let unknownAPI: unknown;

const employeData = {
  name: "shaching",
  email: "shaching@gmail.com",
};

// console.log(employeData);

let middleName: string | number;
middleName = "shaching";

/*
Type alias --- defining a custom type and annotate type
*/

// index signature in typescript gives the shape of an object when you do not know the exact property name----

type userForm = { [k: string]: string };

const userValue: userForm = {
  firstName: "Shaching",
  lastName: "Marma",
  email: "shaching@marma.com",
};

// index signature-----
type Count = { [k: string]: string };

type overview = "likes" | "views" | "shares" | "comment";

type Count1 = Record<overview, number | string>;

const count: Count = {
  name: "shaching",
};

const profile: Count1 = {
  likes: 12222,
  shares: 112321321,
  views: 10989889890,
  comment: "hello",
};

console.log(profile);

type userRoles = Record<string, boolean>;

const user4: userRoles = {
  admin: true,
  editor: false,
  executor: true,
};

// type Colors = "name" | "email" | "password"
// type Colors1 = {[k:Colors] : string}

type Colors = "red" | "blue" | "black" | "teal";
type Values = string | number | boolean;
type ColorRecord = Record<Colors, Values>;

const colorObject: ColorRecord = {
  red: true,
  blue: false,
  black: 1233213,
  teal: "Not Available",
};

console.log(colorObject);
