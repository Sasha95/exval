export default function componentForSidebar(state = "", action) {
  switch (action.type) {
    case "TRANSFER_COMPONENT":
      return action.payload;
    default:
      return state;
  }
}
