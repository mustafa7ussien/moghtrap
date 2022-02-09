import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmpasswordValidator } from 'src/app/components/Shared/confirmPassword.Validator';
import { forbiddenNameValidator } from 'src/app/components/Shared/userName.validator';



@Component({
  selector: 'app-sign-up-owner',
  templateUrl: './sign-up-owner.component.html',
  styleUrls: ['./sign-up-owner.component.scss']
})
export class SignUpOwnerComponent implements OnInit {
  registrationForm =this.fb.group
  ({
    fullName:['',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/admin/)]],
    emailAddress:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
    password:[''],
    confPassword:['']


  },{validators:[confirmpasswordValidator]});
  get fullName()
  {
    return this.registrationForm.get('fullName');
  }
  get emailAddress()
  {
    return this.registrationForm.get('emailAddress')
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
