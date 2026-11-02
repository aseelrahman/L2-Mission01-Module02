//* type alias vs interface

//? interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, and primitives

//TODO: type alias
type ID = number;

//! interface id = number;

type Role = "admin" | "member";

//! interface "admin" | "member"

interface User {
  name: string;
  id: ID;
  role: Role;
}

const user: User = { name: "abc", id: 123, role: "admin" };

//TODO: interface
interface Animal {
  species: string;
}
interface Cat extends Animal {
  breed: string;
}

const cat: Cat = { breed: "Persian", species: "Felix Catus" };

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  model: string;
};

const car: Car = {
  model: "Honda Accord",
  brand: "Honda",
};
