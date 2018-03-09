import { User } from "@app/user";
import { Student } from "@app/student";

export class Parent extends User {
  children?: Student[] | any[];
  childrenIds: string[];
}
