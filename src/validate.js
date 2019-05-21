export default function(values) {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'Country',
    'password',
    'phoneMask'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Your password must be at least 6 characters long'
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-z\d]{6,}$/i.test(values.password)) {
    errors.password = 'Please choose a more secure password1'
  } 
  if (
    values.phoneMask &&
    !/^(0|[1-9][0-9]{9})$/i.test(values.phoneMask)
  ) {
    errors.phoneMask = 'Invalid phone number';
  }
  return errors;
}
