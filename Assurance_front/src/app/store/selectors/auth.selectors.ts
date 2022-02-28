import { AppState } from "../app.states";

export const UserSelector =(state: AppState) => state.user;

export const errorMessageSelector =(state: AppState) => state.errorMessage;