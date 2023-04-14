import { AliasedObject } from ".";

// example
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
};


type SelectedUser = AliasedObject<User, ['id as userId', 'name', 'age', 'date as born']>;

const user: SelectedUser = {
  userId: 1,
  name: 'John',
  age: 20,
  born: new Date()
};

// used in function
function actOnUser(u: SelectedUser) {
  console.log(u.userId, u.name, u.age, u.born);
}

// example with interface
interface IUser {
  id: number;
  name: string;
  age: number;
  email: string;
}

type SelectedIUser = AliasedObject<User, ['id as userId', 'name', 'age']>;
const user2: SelectedIUser = {
  userId: 1,
  name: 'John',
  age: 20,
};
