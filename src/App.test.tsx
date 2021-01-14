import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { ActionType, middleware } from './Reducers/ActionTypes';
import RootReducer, { ApplicationState } from "./Reducers/RootReducer";

export const store = createStore<ApplicationState, ActionType, {}, {}>(RootReducer, applyMiddleware(...middleware));
const setup = () => {
  return render(
    <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>
  );
}
test('renders learn react link', () => {
  const { container } = setup();
  expect(container).not.toBeNull();
});
