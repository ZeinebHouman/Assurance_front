import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './../../store/actions/auth.actions'
import { User } from 'src/app/models/user';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user!: User

  constructor(private store : Store) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    /*console.log(this.user);
    const credentials = {
      email: this.user.email,
      password : this.user.password
    }
    this.store.dispatch(AuthActions.LOGIN({credentials}))*/
  }


}