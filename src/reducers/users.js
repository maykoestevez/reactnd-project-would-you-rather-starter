import { FETCH_USERS, SAVE_QUESTION_ANSWER, SAVE_QUESTION_USER } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {

        case SAVE_QUESTION_ANSWER:
            const { qid, answer, authedUser } = action.questionAnswer
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case FETCH_USERS:

            return {
                ...state,
                ...action.users
            }

            case SAVE_QUESTION_USER:
                const {id, author} = action.question;
                return{
                    ...state,
                    [author]: {
                      ...state[author],
                      questions: state[author].questions.concat([id])
                    } 
                }
        default: return state
    }
}