import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={SignUpPage} /> 
                    <Route path='/signin' component={SignInPage} />
                </Switch>
            </BrowserRouter>    
        )
    }
}

export default App;