import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/components/Classes/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userDate =new User("Mostafa hussien","Mostafa@gmail.com","asd123","asd123");

  registrationForm= this.fb.group(
    {
      // use form builder services
      fullName:[''],
      emailAddress:[''],
      password:[''],
      Confpassword:['']

      // fullName:new FormControl(''),
      // emailAddress:new FormControl(''),
      // password:new FormControl(''),
      // Confpassword:new FormControl('')

    }
  );


  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
