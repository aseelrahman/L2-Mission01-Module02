//* "typeof"

let x = null;
console.log(typeof x);

//* Type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

//* Truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "Aseel",
  address: {
    street: "ABC",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }

  throw new Error("User not found");
};
