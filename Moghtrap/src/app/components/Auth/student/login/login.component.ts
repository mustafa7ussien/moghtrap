import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/components/Shared/userName.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registrationForm =this.fb.group
  ({
    
    emailAddress:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),forbiddenNameValidator (/admin@gmail.com/)]],
    password:['',Validators.required]
    


  });
  get emailAddress()
  {
    return this.registrationForm.get('emailAddress')
  }
  get password()
  {
    return this.registrationForm.get('password')
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
