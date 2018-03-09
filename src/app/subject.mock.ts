import { Subject } from "./subject";
const subjectsJSON = [
  {
    id: "1",
    name: "Math",
    description: "Mathalino"
  },
  {
    id: "2",
    name: "English",
    description: "Englishpekenin"
  },
  {
    id: "3",
    name: "Science",
    description: "Science is science"
  }
];
export const subjects: Subject[] = subjectsJSON.map(
  subject => subject as Subject
);
