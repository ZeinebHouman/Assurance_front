import { Action, createReducer, on } from '@ngrx/store';
import { LOGIN_SUCCESS, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from '../actions/auth.actions';
import { LOGIN, LOGIN_FAILURE } from './../actions/auth.actions';
import { User } from './../../models/user';


export interface State {
  //token : string | null,
//  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState:  ReadonlyArray<User> = [] ;

  //  isAuthenticated: false,
  //token : null,
   // user: null,
    //errorMessage: null

  const _authReducer = createReducer(
    initialState,
   on(LOGIN_SUCCESS, (state,{data}) =>{
      return {
        ...state,
   //     token: null,
        user: data.user,
        errorMessage: null
      }
    }),
    on(LOGIN_FAILURE, (state, {error}) =>{
      return {
        ...state,
        user: null,
      //  token: null,
        errorMessage: error
      }
    })
  
   
  );

  const _RegisterReducer = createReducer(
    initialState,
   on(REGISTER, (state,{user}) =>{
      return {
        ...state,
        //token: null,
       user,
      errorMessage: null
      }
    }),
    on(REGISTER_SUCCESS, (state,{data}) =>{
      return {
        ...state,
        //token: null,
        user: data?.user,
        errorMessage: null
      }
    }),
    on(REGISTER_FAILURE, (state, {error}) =>{
      return {
        ...state,
        user: null,
      //  token: null,
        errorMessage: error
      }
    })
  
   
  );
  export function RegisterReducer(state: any  , action: any ) {
    
    console.log("state : " ,state);
    console.log("action : " ,action)
    return _RegisterReducer(state, action);
  }
  
 export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
