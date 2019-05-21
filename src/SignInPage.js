import React, { Component } from 'react';
import { Values } from 'redux-form-website-template';
import showResults from './showResults';
import SignIn from "./SignIn";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SignInPage extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={{ padding: 15 }}>
                <SignIn onSubmit={showResults} />
                <Values form="submitValidation" />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default SignInPage;