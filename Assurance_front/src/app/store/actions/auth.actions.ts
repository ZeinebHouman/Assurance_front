import { Action, createAction, props } from '@ngrx/store';
import { User } from '../../models/user';




export const LOGIN = createAction('[Auth] Login', props<{ credentials:{ email: string , password: string }}>());
export const REGISTER = createAction('[Auth] Register', props<{user: User}>());
export const REGISTER_SUCCESS = createAction('[Auth] Register Success', props<{data : {user: User}}>());
export const LOGIN_SUCCESS = createAction('[Auth] Login Success', props<{data : {user: User}}>());
export const LOGIN_FAILURE = createAction('[Auth] Login Failure', props<{ error : string}>());
export const REGISTER_FAILURE = createAction('[Auth] Login Failure', props<{ error : string}>());


/*
export class LogIn implements Action {
  readonly type = LOGIN.toString();
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type =  LOGIN_SUCCESS.toString();
  constructor(public payload: any) {}
}*/ 

//export type All = LogIn | LogInSuccess;