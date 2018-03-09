import { subjects } from "./subject.mock";
import { Student } from "./student";
import { Parent } from "@app/parent";
import { User } from "./user";

const usersJSON = [
  {
    id: "1",
    email: "ralph@mail.com",
    password: "ralph",
    role: "parent",
    childrenIds: ["2", "3"]
  },
  {
    id: "2",
    email: "bryan@mail.com",
    password: "bryan",
    role: "student",
    parentId: "1",
    subjectIds: ["1", "2"]
  },
  {
    id: "3",
    email: "gino@mail.com",
    password: "gino",
    role: "student",
    parentId: "1",
    subjectIds: ["3"]
  }
];
export const users: User[] = usersJSON.map(user => {
  switch (user.role) {
    case "parent":
      user = user as Parent;
      if (!user.childrenIds) return;
      user.children = usersJSON
        .filter(u => user.childrenIds.includes(u.id))
        .map(s => {
          const student = s as Student;
          return s;
        });
      break;
    case "student":
      user = user as Student;
      if (!user.parentId) return;
      user.parent = usersJSON.find(u => u.id === user.parentId);
      user.subjects = user.subjectIds
        ? subjects.filter(s => user.subjectIds.includes(s.id))
        : [];
      break;
    default:
      user = user as User;
  }
  user = user as User;
  user.password = btoa(user.password);
  return user;
});
