import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { AuthService } from "@app/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  credential: { email: string; password: string } = {
    email: "",
    password: ""
  };
  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.authService.auth) return this.router.navigate(["/dashboard"]);
  }

  onLogin() {
    this.authService.login(this.credential.email, this.credential.password);
  }
}
