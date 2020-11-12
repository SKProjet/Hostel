import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  submitLabel = 'Login';
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {}

  login(form: FormGroup): void {
    const apiUrl = 'http://localhost:3000/api/users/login?access_token=2fpo1G8qf6ysc5VkPwinOnALkVaI2pJyzhJBFaqCmTGM9CayE03mBvfsP4I1M8KJ';
    const email = form.value;
    const password = form.value;
    const emailValue = email;
    const passwordValue = password;
    const credentials = {
      email: emailValue,
      password: passwordValue
    };
    this.http.post
    (apiUrl,
     credentials)
      .subscribe(
        successLogin => {
          if (successLogin){
          this.router.navigate(['/dashboard/list']);
        } else {
          console.log('error');
        }
      }
    );
  }
}
