import { combineReducers } from "@reduxjs/toolkit";
import contactReducer from "../slices/contactSlice";

export const rootReducer = combineReducers({
  contactData: contactReducer,
});
