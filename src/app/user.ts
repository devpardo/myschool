export class User {
  id: string;
  email: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthday?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  role: string;

  [key: string]: any;
  private _password?: string;
  get password() {
    return this._password;
  }
  set password(val) {
    console.log(val);
    this._password = btoa(val);
  }
}
