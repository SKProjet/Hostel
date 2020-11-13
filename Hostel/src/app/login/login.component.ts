import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  submitLabel = 'Login';
  constructor(private readonly userService: UserService) { }
  ngOnInit(): void {}

  login(form: FormGroup): void
  {
    const {email, password} = form.value;
    this.userService.login(email, password);
  }

}
