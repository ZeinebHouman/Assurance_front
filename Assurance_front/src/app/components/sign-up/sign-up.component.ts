import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as AuthActions from './../../store/actions/auth.actions'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup=new FormGroup({
    firstname: new FormControl('firstname'),
    lastname: new FormControl('lastname'),
    email: new FormControl('email'),
    password: new FormControl('password'),
    });

  ngOnInit() {
   
  }



  constructor(private store : Store,private formBuilder: FormBuilder) { 

    this.registerForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
   });
  }
 
  onSubmit(form: FormGroup): void{
    console.log('password', form.value.password);
    console.log('firstname', form.value.firstname); 
    console.log('lastname', form.value.lastname);
    console.log('Email', form.value.email);
 
   
    const user : User = {
      firstname: form.value.firstname,
      lastname:  form.value.lastname,
      email: form.value.email,
      password :form.value.password
    }
    console.log(user);
    this.store.dispatch(AuthActions.REGISTER({user: user}));
  }
 
}