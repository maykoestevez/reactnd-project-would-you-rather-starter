import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA"
import { saveQuestionUser } from "./users"

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const UPDATE_VOTES = 'UPDATE_VOTES'

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function updateVotes(questionAnswer) {
    return {
        type: UPDATE_VOTES,
        questionAnswer
    }
}

export function fetchQuestions(questions) {
    return {
        type: FETCH_QUESTIONS,
        questions
    }
}

export function handleQuestions() {
    return (dispatch) => {
        return _getQuestions().then((questions) => dispatch(fetchQuestions(questions)))
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return _saveQuestion(question).then((questionResult) => {
            dispatch(saveQuestion(questionResult));
            dispatch(saveQuestionUser(questionResult));
        })
    }
}

