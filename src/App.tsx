import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import Results from "./Components/Result/Results";
import ResumeForm from "./Components/Form/ResumeForm";
import './App.css';
import { useState } from 'react';
import {useCookies } from 'react-cookie';
import FormType from './Types/FormType';
import { FormPropsI } from './Types/ComponentTypes';
import {forminputReset} from './Types/FormType'

function App() {
    const [cookies, setCookie,removeCookie] = useCookies(['FormInputs']);
    const formData:FormType = forminputReset;
    const forminput: FormPropsI = {
       formData,
        cookies,
        setCookie,
        removeCookie,
    }
    const [formProps, setformProps]= useState(forminput);

    return (
        <div className="App">
            <NavBar/>
            <Switch>
                <Route path="/results">
                    <Results cookies={cookies}/>
                </Route>
                <Route path="/">
                    <ResumeForm {...formProps}/>
                </Route>
            </Switch>
        </div>
    );
}
export default App;
