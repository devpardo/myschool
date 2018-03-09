import { Observable } from "rxjs/Observable";
import { Student } from "./student";
import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";

@Injectable()
export class StudentsService {
  students: Student[] = [
    new Student()
  ];
  constructor() {}

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }
}
