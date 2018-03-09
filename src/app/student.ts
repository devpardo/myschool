import { Parent } from "./parent";
import { User } from "@app/user";

export class Student extends User {
  parent?: Parent;
}
