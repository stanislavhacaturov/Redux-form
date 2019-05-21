import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import asyncValidate from './asyncValidate';
import validate from './validate';
import submit from './submitSignUp';

import './styles.css';

const renderTextField = (
  { input, label, placeholder, meta: { touched, error }, ...custom },
) => (
  <div>
    <label className='labelForm'>{label}</label>
    <TextField
      hintText={placeholder}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  </div>
);

const renderSelectField = (
  { input, label, placeholder, meta: { touched, error }, children, ...custom },
) => (
    <div>
      <label className='labelForm'>{label}</label>
      <SelectField
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
      />
    </div>
);

const renderNamberField = (
  { input, label, placeholder, meta: { touched, error }, ...custom },
) => (
  <div className='inputWrapper__input inputPhone'>
    <span>+7</span>
    <TextField
      hintText={placeholder}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  </div>
);

class SignUp extends Component { 
  render() {
    const { invalid, submitting, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(submit)}>
        <span className='spanLink'>Already have an account?</span> 
        <Link to='signin' className='link'>Sign In</Link> 
        <h2 className='h2'>Sign Up</h2> 
        <div>
          <Field name="firstName" component={renderTextField} placeholder='Your first name' label="First Name" />
        </div>
        <div>
          <Field name="lastName" component={renderTextField} placeholder='Your last name' label="Last Name" />
        </div>
        <div>
          <Field name="email" component={renderTextField} placeholder='Your company Email' label="Email" />
        </div>
        <div>
          <Field  name="Country"  component={renderSelectField} placeholder='Your country' label="Country" >
            <MenuItem value="USA" primaryText="USA" />
            <MenuItem value="Austria" primaryText="Austria" />
            <MenuItem value="Great Britain" primaryText="Great Britain" />
            <MenuItem value="Russia" primaryText="Russia" />
            <MenuItem value="Germany" primaryText="Germany" />
            <MenuItem value="Israel" primaryText="Israel" />
          </Field>
        </div>
          <Field placeholder='(___) ___-__-__' name="phoneMask" component={renderNamberField} label='Phone number' type="tel" />
        <div>
          <Field name="password" type='password' component={renderTextField} placeholder='Create a password' label="Password" />
        </div>
        <div>
          <button type="submit" disabled={invalid || submitting}>Сontinue</button>
        </div>
      </form>
    );
  }
};

export default reduxForm({
  form: 'MaterialUiForm', 
  validate,
  asyncValidate,
})(SignUp);