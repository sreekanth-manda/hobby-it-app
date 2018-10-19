import axios from 'axios';

export default async function getHobbies() {
  return (dispatch) => {
    const response = await axios.get('http://127.0.0.1:5000/organizer/hobbies');
    if(response) {
      dispatch({
        type: 'GET_HOBBIES_SUCCESS',
        payload: response.data
      });
    } else {
      dispatch({
        type: 'GET_HOBBIES_FAILED',
        payload: []
      });
    }
  }
}
