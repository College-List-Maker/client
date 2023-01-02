import { combineReducers } from "redux";
import auth from "./auth";
import form from "./form";

export const reducers = combineReducers({ auth, form });
