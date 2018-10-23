export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

function requestRegistration(creds) {
  return {
    type: REGISTRATION_REQUEST,
    isFetching: true,
    isRegistration: false,
    creds
  };
}

function receiveRegistration(user) {
  return {
    type: REGISTRATION_SUCCESS,
    isFetching: false,
    isRegistration: true
  };
}

function RegistrationError(message) {
  return {
    type: REGISTRATION_FAILURE,
    isFetching: false,
    isRegistration: false,
    message
  };
}

export const RegistrationUser = creds => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: creds.email, password: creds.password })
  };

  return async dispatch => {
    dispatch(requestRegistration(creds));
    const URL = "/api/registration/";
    await fetch(URL, config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          dispatch(RegistrationError(user.message));
          return Promise.reject(user);
        } else {
          dispatch(receiveRegistration(user));
        }
      })
      .catch(err => console.log("Error: ", err));
  };
};
