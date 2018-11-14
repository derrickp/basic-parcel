export interface PersonInput {
  name: string;
  email: string;
}

export default class Person {
  name: string;
  email: string;

  constructor({ name, email }: PersonInput) {
    this.name = name;
    this.email = email;
  }
}
