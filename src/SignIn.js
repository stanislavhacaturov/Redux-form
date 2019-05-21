import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import submit from './submitSignIn';
import { Link } from 'react-router-dom';

import './styles.css';

const renderField = (
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

const SignIn = props => {
  const { error, handleSubmit, invalid, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <span className='spanLink'>Don't have an account?</span> 
          <Link to='/' className='link'>Sign Up</Link> 
          <h2 className='h2'>Sign In</h2> 
          <div>
            <Field name="email" component={renderField} placeholder='Your Email address' label="Email" />
          </div>
          <div>
            <Field name="password" type='password' component={renderField} placeholder='Your password' label="Password"  />
          </div>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={invalid || submitting}>Log In</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
})(SignIn);
