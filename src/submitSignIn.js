import { SubmissionError } from 'redux-form';
import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => { // simulate server latency
    if (!['example@test.com'].includes(values.email)) {
      throw new SubmissionError({
        email: 'User does not exist',
        _error: 'Login failed!',
      });
    } else if (values.password !== '123') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      axios.post(`http://localhost:3001/`,
        { values }
        ).then(res => {
            console.log(values)
        }).catch(err => {
            console.log(err)
        })
        }
  });
}

export default submit;
