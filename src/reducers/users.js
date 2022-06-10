import { FETCH_USERS, SET_AUTHED_USER } from "../actions/users";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USERS:

            return {
                ...state,
                ...action.users
            }
        case SET_AUTHED_USER: return action.id
        default: return state
    }
}