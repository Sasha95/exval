const initialState = {
  banks: undefined
};

export default function getCountersFromServer(state = initialState, action) {
  switch (action.type) {
    case "COUNTERS_FETCH_SUCCESS":
      return [...state, action.payload];
    default:
      return state;
  }
}
