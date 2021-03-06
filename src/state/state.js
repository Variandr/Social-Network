import DialogsReducer from './dialogs-reducer';
import ProfileReducer from './profile-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import UsersReducer from './users-reducer';
import AuthReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import AppReducer from "./app-reducer";

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer,
    loginPage: AuthReducer,
    app: AppReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;