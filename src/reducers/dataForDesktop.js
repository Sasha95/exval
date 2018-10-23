const initialState = {
  cash: "cash for desktop from dataBase"
};

export default function getDataFromServer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA_FROM_SERVER_SUCCESS":
      return [...state, action.payload];
    case "FETCH_DATA_FROM_SERVER_FAILED":
      return action.payload;
    default:
      return state;
  }
}
