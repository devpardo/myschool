import { Parent } from "@app/parent";
import { User } from "@app/user";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { users } from "@app/user.mock";

const sleep = timeout =>
  new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      clearTimeout(interval);
      resolve();
    }, timeout);
  });

@Injectable()
export class AuthService {
  auth: User;
  constructor(private router: Router) {
    this.checkToken();
  }
  login(email: string, password: string) {
    if (this.auth) return alert("Already Logged In");
    const user = this.findUserByEmail(email);
    if (!user) return alert("User not exist");
    if (!user.validatePassword(password))
      return alert(`Invalid password for ${user.email}`);
    this.auth = user;
    const token = { id: this.auth.id };
    localStorage.setItem("token", JSON.stringify(token));
    alert(`User authenticated: ${this.auth.email}`);
    this.router.navigate(["/dashboard"]);
  }

  logout() {
    console.log("logout");
    localStorage.removeItem("token");
    this.auth = null;
    this.router.navigate(["/"]);
  }

  checkToken() {
    const token = localStorage.getItem("token");
    if (!token) return;
    const { id } = JSON.parse(token);
    this.auth = this.findUserById(id);
  }
  findUserBy(value: any, key: string = "id") {
    return users.find(user => user[key] === value);
  }
  findUserByEmail(email: string) {
    return this.findUserBy(email, "email");
  }
  findUserById(id: string) {
    return this.findUserBy(id);
  }
}
