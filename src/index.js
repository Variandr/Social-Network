import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./state/state";
import {Provider} from "react-redux";

const rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
});