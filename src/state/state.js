import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import {combineReducers, createStore} from "redux";
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer
})
let store = createStore(reducers);
export default store;