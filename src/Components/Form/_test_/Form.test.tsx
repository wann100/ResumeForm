import React from 'react';
import { render } from '@testing-library/react';
import ResumeForm from '../ResumeForm';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { ActionType, middleware } from '../../../Reducers/ActionTypes';
import RootReducer, { ApplicationState } from "../../../Reducers/RootReducer";
import { FormPropsI } from '../../../Types/ComponentTypes';
import FormType, { forminputReset } from '../../../Types/FormType';
import { Cookies } from 'react-cookie';
export const store = createStore<ApplicationState, ActionType, {}, {}>(RootReducer, applyMiddleware(...middleware));
const cookies= new Cookies();
const setCookie =jest.fn();
const removeCookie = jest.fn();
const formData:FormType = forminputReset;
const forminput: FormPropsI = {
   formData,
    cookies,
    setCookie,
    removeCookie,
}
const setup = () => {
  return render(
    <BrowserRouter><Provider store={store}><ResumeForm {...forminput} /></Provider></BrowserRouter>
  );
}
test('renders everything inside of Form', () => {
  const { getByText } = setup();
  expect(getByText('Phone Number')).toBeInTheDocument();
  expect(getByText('First Name')).toBeInTheDocument();
  expect(getByText('Last Name')).toBeInTheDocument();
  expect(getByText('Email')).toBeInTheDocument();
  expect(getByText('Five Year Goals')).toBeInTheDocument();
  expect(getByText('Are willing to relocate?')).toBeInTheDocument();
  expect(getByText('Select What type of Developer you are')).toBeInTheDocument();
  expect(getByText('Select Education Level')).toBeInTheDocument();
  expect(getByText('Filename:')).toBeInTheDocument();
  expect(getByText('Submit')).toBeInTheDocument();
  expect(getByText('Clear')).toBeInTheDocument();
});
