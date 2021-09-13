import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./state/state";

const rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
});

