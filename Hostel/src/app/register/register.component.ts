import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
/*import { UserService } from '../user.service';*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {
  submitLabel = 'Register';
  newUser = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  register(form: FormGroup): void {
    const email = form.value;
    const password = form.value;
    const emailValue = email;
    const passwordValue = password;
    const apiUrl = 'http://localhost:3000/api/users/';
    const credentials = {
      email: emailValue,
      password: passwordValue
    };
    this.http.post
    (apiUrl,
     credentials)
      .subscribe(
      successRegister => {
        if (successRegister){
          this.newUser = true;
        } else {
          console.log('error');
        }
      }
    );
  }

}
