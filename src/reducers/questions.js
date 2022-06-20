import { FETCH_QUESTIONS, SAVE_QUESTION, UPDATE_VOTES } from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }

        case UPDATE_VOTES:
            const { qid, answer, authedUser } = action.questionAnswer
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default: return state
    }
}