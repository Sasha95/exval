const initialState = {
  banks: []
};

export default function getBanksFromServer(state = initialState, action) {
  switch (action.type) {
    case "BANKS_FETCH_SUCCESS":
      return action.payload;
    default:
      return state;
  }
}
