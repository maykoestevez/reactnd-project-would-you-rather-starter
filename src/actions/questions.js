export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function saveQuestionAnswer(questionAnswer) {
    return {
        type: SAVE_QUESTION,
        questionAnswer
    }
}


export function fetchQuestions(questions) {
    return {
        type: FETCH_QUESTIONS,
        questions
    }
}
