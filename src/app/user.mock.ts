import { User } from "./user";

const usersJSON = [
  {
    id: "1",
    email: "ralph@mail.com",
    password: "ralph"
  },
  {
    id: "2",
    email: "bryan@mail.com",
    password: "bryan"
  },
  {
    id: "3",
    email: "gino@mail.com",
    password: "gino"
  }
];
export const users: User[] = usersJSON.map(user => {
  return new User(user.id, user.email, user.password);
});
