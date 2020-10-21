const appStateReducer = (state = "welcome", action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return action.newState;
    default:
      return state;
  }
};

export default appStateReducer;