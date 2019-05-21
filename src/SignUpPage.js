import React, { Component } from 'react';
import { Values } from 'redux-form-website-template';
import showResults from './showResults';
import SignUp from './SignUp';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SignUpPage extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={{ padding: 15 }}>
                    <SignUp onSubmit={showResults} />
                    <Values form="MaterialUiForm" />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default SignUpPage;