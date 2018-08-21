import { CREATE_STUDENT_SUCCESS,CREATE_STUDENT_PENDING,CREATE_STUDENT_ERROR } from '../actions/types';


const initialState = {
    success: "",
    error: "",
    isPending: false
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_STUDENT_PENDING:
            return Object.assign({},state,{initialState:{isPending:true}})
        default:
            return state;
    }
}

const loginState = {
    user: [],
    isLoggedIn: false,
    isPending: false

}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// module.exports = {
//     registrationReducer,
//     loginReducer
// };