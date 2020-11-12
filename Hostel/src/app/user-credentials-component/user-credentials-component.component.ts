import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-credentials-component',
  templateUrl: './user-credentials-component.component.html',
  styleUrls: ['./user-credentials-component.component.sass']
})
export class UserCredentialsComponentComponent implements OnInit {
  @Input() title: string;
  @Input() submitLabel: string;
  @Output() validationForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  formValid: FormGroup;

  constructor(private formBuild: FormBuilder) { }
  ngOnInit(): void {
    const {email, required, minLength } = Validators;
    this.formValid = this.formBuild.group({
      email: ['', [email, required]],
      password: ['', [minLength(8), required]]
    });
  }
  sendCredentials(): void{
    this.validationForm.emit(this.formValid);
  }
}
