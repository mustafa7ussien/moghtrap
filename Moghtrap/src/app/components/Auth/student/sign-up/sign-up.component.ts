import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/components/Classes/user';
import { confirmpasswordValidator } from 'src/app/components/Shared/confirmPassword.Validator';
import { AuthService } from 'src/app/components/Shared/Services/auth.service';
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
    name:['',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/admin/)]],
    email:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
    password:[''],
    confPassword:['']


  },{validators:[confirmpasswordValidator]});
  roomList: Object;
  get fullName()
  {
    return this.registrationForm.get('name');
  }
  get emailAddress()
  {
    return this.registrationForm.get('email')
  }

  submitted: boolean;

  constructor( private fb:FormBuilder,private router:Router,private authserv:AuthService) { }

  ngOnInit(): void {
   

  }


  onSubmit()
  {this.submitted=true;
    if(this.registrationForm.invalid){return;}
    this.authserv.register(this.registrationForm.value)
    .pipe(first())
    .subscribe(
      data=>{
        // this.roomList=data;
        this.router.navigate(['auth/login']);
        console.log("singn uo successufly");
      },error=>{console.log("error post api");});
      
      
  
  

  }

}
