export class User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthday?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  role?: string;

  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
  validatePassword(password: string) {
    return this.password === password;
  }
}
