import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./state/state";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
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