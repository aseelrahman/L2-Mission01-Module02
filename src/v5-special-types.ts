//* Top types

let helloWorld: any = "Hello World!";
helloWorld.length;

const something: unknown = "Hello World!";
//! something.length;

//* Core types

let something2: unknown;

const num: number = 123;

something2 = num;

type Status = "pending" | "success";
let someStatus: string;

let status: Status = "pending";

someStatus = status;

//* Nullish types

interface User {
  name: string;
}

type LoggedInUser = User | null;

const currentUser: LoggedInUser = null;

//* Unit type

const greet = () => {
  console.log("Hellow World");
};

greet();

//* Sub-type of unit type

const anotherGreet = (): undefined => {
  console.log("Hellow World");
};

const greetings = anotherGreet();
console.log(greetings);

//* Bottom type

//! let neverHappenning: never = "adfadfs";

const getError = (msg: string): never => {
  throw new Error(msg);
};

const x: string = getError("ABC");
