import { combineReducers } from 'redux';
import  { loginReducer,registrationReducer} from './authReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer=combineReducers({
    loginReducer:loginReducer,
    registrationReducer:registrationReducer,
     form:formReducer
 })
 export default rootReducer;