import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.services';
import { Observable } from 'rxjs';
import * as AuthActions from '../actions/auth.actions'

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}



  RegisterRequest$ =createEffect(() => this.actions.pipe(
      ofType(AuthActions.REGISTER),
      exhaustMap((action) => 
      this.authService
      .signUp(action.user)
    
      .pipe(
         tap(() => console.log("voiiiiiiilaaaaaa"+JSON.stringify(action.user))),
          map((user) => {
         
              return AuthActions.REGISTER_SUCCESS({data :{user : user}});
          } ),
         
          
          
      ) 
      ),
     
  )
  )
        }
    

