import { _getUsers, _saveQuestionAnswer } from "../_DATA"
import { updateVotes } from "./questions"


export const FETCH_USERS = 'FETCH_USERS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION_USER = 'SAVE_QUESTION_USER'


export function fetchUsers(users) {
    return {
        type: FETCH_USERS,
        users
    }
}

export function handleUsers() {
    return (dispatch) => {
        return _getUsers().then((users) => dispatch(fetchUsers(users)))
    }
}

export function saveQuestionAnswer(questionAnswer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        questionAnswer
    }
}

export function handleAuthedUser() {
    return (dispatch) => {
        return _getUsers().then((users) => dispatch(fetchUsers(users)))
    }
}

export function saveQuestionUser(question) {
    return {
        type: SAVE_QUESTION_USER,
        question
    }
}


export function handleSaveQuestionAnswer(questionAnswer) {
    return (dispatch) => {
        return _saveQuestionAnswer(questionAnswer).then(() => {
            dispatch(saveQuestionAnswer(questionAnswer))
            dispatch(updateVotes(questionAnswer))
        })
    }
}