import * as auth from './reducers/auth.reducers';
import { User } from 'src/app/models/user';


/* export interface AppState {
  authState: auth.State;
}

export const reducers = {
 auth : auth.reducer
}; */

export interface AppState {
  user: User;
  errorMessage: string;
}

