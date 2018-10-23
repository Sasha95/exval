const initialState = {
  open: false
};

export default function OpenSideBar(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_STATE":
      return [...state, action.payload];
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
