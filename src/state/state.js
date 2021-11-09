import DialogsReducer from './dialogs-reducer';
import ProfileReducer from './profile-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import UsersReducer from './users-reducer';
import AuthReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;