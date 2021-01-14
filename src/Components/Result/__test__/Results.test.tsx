import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { ActionType, middleware } from '../../../Reducers/ActionTypes';
import RootReducer, { ApplicationState } from "../../../Reducers/RootReducer";

import Results from '../Results';
import { Cookies } from 'react-cookie';

/**
 * fake input to test
 */
export const forminput ={
    firstName: 'asdfaf',
    lastName: 'asfdasfd',
    phoneNumber:' 35353',
    email:'asfasf',
    developerType:[],
    educationLevel:[],
    relocationStatus:true,
    fiveYearGoals:'asfaf',
    resume:null,
};


  

const store = createStore<ApplicationState, ActionType, {}, {}>(RootReducer, applyMiddleware(...middleware));

const setup = () => {
  return render(
    <BrowserRouter><Provider store={store}><Results cookies={undefined} /></Provider></BrowserRouter>
  );
}
beforeAll(() => {
    Object.defineProperty(window.document, 'cookie', {
        writable: true,
        value: 'FormInputs='+"["+JSON.stringify(forminput)+"]",
      });
});
test('renders everything inside of Form', () => {
  const { getByText } = setup();
  //check data
  expect(getByText('35353')).toBeInTheDocument();
expect(getByText('asdfaf')).toBeInTheDocument();

//check columns rendered 
expect(getByText('Last Name')).toBeInTheDocument();
expect(getByText('First Name')).toBeInTheDocument();
expect(getByText('email')).toBeInTheDocument();
expect(getByText( 'Relocation Status')).toBeInTheDocument();
expect(getByText('Type of Developer')).toBeInTheDocument();
expect(getByText('Education Level')).toBeInTheDocument();




  
 
 
  //screen.debug()
  //expect(linkElement).toBeInTheDocument();
});
