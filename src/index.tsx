import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import RootReducer, { ApplicationState } from "./Reducers/RootReducer";
import { ActionType, middleware } from "./Reducers/ActionTypes";
import { CookiesProvider } from 'react-cookie';
import './index.css';

export const store = createStore<ApplicationState, ActionType, {}, {}>(RootReducer, applyMiddleware(...middleware));

ReactDOM.render(
    <CookiesProvider>
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    </CookiesProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
