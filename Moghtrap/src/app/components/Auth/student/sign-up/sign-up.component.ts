import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/components/Classes/user';
import { confirmpasswordValidator } from 'src/app/components/Shared/confirmPassword.Validator';
import { forbiddenNameValidator } from 'src/app/components/Shared/userName.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userDate =new User("Mostafa hussien","Mostafa@gmail.com","asd123","asd123");

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



  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
