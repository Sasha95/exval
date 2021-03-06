// export default function getEntryDataFromServer(state = false, action) {
//   switch (action.type) {
//     case "ENTRY_SUCCESS":
//       return action.payload;
//     case "ENTRY_FAILED":
//       return action.payload;
//     default:
//       return state;
//   }
// }
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "../actions/EntryAction";

export default function auth(
  state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem("token") ? true : false
  },
  action
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ""
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    default:
      return state;
  }
}
