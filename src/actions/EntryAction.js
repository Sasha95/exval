export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.token
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

export const loginUser = creds => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: creds.email, password: creds.password })
  };

  return async dispatch => {
    dispatch(requestLogin(creds));
    const URL = "/api/login/";
    await fetch(URL, config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          dispatch(loginError(user.message));
          return Promise.reject(user);
        } else {
          localStorage.setItem("token", user.token);
          // Dispatch the success action
          dispatch(receiveLogin(user));
        }
      })
      .catch(err => console.log("Error: ", err));
  };
};

export function logoutUser() {
  console.log("logut");
  return dispatch => {
    localStorage.removeItem("token");
    dispatch(receiveLogout());
  };
}

//my function --------------------------------------------
export const SideEntry = (email, password) => dispatch => {
  setTimeout(() => {
    console.log("Get data for entry");
    console.log(email, password);
    const accsess = true;
    if (accsess) {
      dispatch({
        type: "ENTRY_SUCCESS",
        payload: { check: true, name: "Александр", valute: "$", score: 1567 }
      });
    } else {
      dispatch({ type: "ENTRY_FAILED", payload: false });
    }
  }, 200);
};
