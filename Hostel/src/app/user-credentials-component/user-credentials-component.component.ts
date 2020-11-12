import {Component, Input, OnInit} from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-credentials-component',
  templateUrl: './user-credentials-component.component.html',
  styleUrls: ['./user-credentials-component.component.sass']
})
export class UserCredentialsComponentComponent implements OnInit {

  @Input() title: string;
  @Input() submitLabel: string;

  user: User = {
    password: '',
    email: ''
  };

  userForm(){

  }

  sendCredentials(){

  }

  constructor(private userService: UserService) {

  }


  ngOnInit(): void {
  }


}
