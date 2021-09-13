import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer
})
let store = createStore(reducers);
export default store;