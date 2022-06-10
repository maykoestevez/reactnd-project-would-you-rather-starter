export const FETCH_USERS = 'FETCH_USERS'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function fetchUsers(users) {
    return {
        type: FETCH_USERS,
        users
    }
}