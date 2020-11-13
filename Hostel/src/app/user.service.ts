import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:3000/api/users';
  private message: string;
  constructor(private router: Router, private http: HttpClient) {
  }
  login(email: string, password: string): void {
    const credential = {
      email,
      password
    };
    this.http.post(
      this.apiUrl,
      credential
    ).subscribe(successLogin => {
      if (successLogin){
        this.message =  'Connexion réussi ';
        console.log(this.message);
        this.router.navigate(['/dashboard/list']);
      }
      });
  }

}
