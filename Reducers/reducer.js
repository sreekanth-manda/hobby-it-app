export default function reducer(state = { hobbies: [] }, action) {
  switch(action.type) {
    case 'GET_HOBBIES':
      return { ...state, hobbies: action.hobbies, ready: false };
    case 'GET_HOBBIES_SUCCESS':
      return { ...state, ready: true, hobbies: action.payload.hobbies };
    default:
      return state;
  }
}