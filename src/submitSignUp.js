import { SubmissionError } from 'redux-form';
import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => { // simulate server latency
    if (!values.email) {
      throw new SubmissionError({
        email: 'Missing email',
        _error: 'Login failed!',
      });
    } else if (!values.password) {
      throw new SubmissionError({
        password: 'Missing password',
        _error: 'Login failed!',
      });
    } else if (!values.firstName) {
        throw new SubmissionError({
            firstName: 'Missing password',
          _error: 'Enter your first name!',
        });
    } else if (!values.lastName) {
        throw new SubmissionError({
            lastName: 'Missing password',
          _error: 'Enter your last name!',
        });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      axios.post(`http://localhost:3001/create`,
        { values }
        ).then(res => {
            console.log(values)
        }).catch(err => {
            console.log(values)
        })
        }
  });
}

export default submit;


// "firstName": "trewq",
// "lastName": "qwerty",
// "email": "fdsfdsf@dsadasd.ru",
// "Country": "Great Britain",
// "phoneMask": "9996969144"