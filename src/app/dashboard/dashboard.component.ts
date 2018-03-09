import { Parent } from "@app/parent";
import { AuthService } from "./../auth.service";
import { User } from "@app/user";
import { Component, OnInit } from "@angular/core";
import { Student } from "@app/student";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  auth: User | Parent | Student;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      console.log(auth);
      this.auth = auth;
    });
  }
}
