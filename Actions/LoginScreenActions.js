import axios from 'axios';

export default function getHobbies() {
  return (dispatch) => {
    axios.get('http://127.0.0.1:5000/organizer/hobbies')
    .then(response => {
      dispatch({
        type: 'GET_HOBBIES_SUCCESS',
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}