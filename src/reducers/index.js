import { combineReducers } from "@reduxjs/toolkit";
import questions from "./questions";
import authedUser from "./authedUser";
import users from "./users";

export default combineReducers({
    questions,
    users,
    authedUser
})