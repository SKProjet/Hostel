import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: any;

  constructor() { }

  callApi(): void {
    const apiUrl = 'http://localhost:3000/api/users';
    const credentials = {
      email: '',
      password: ''
    };
    this.http.post(
      apiUrl,
      credentials,
      {params: {access_token: 'plop'}}
    ).subscribe();
  }

}
