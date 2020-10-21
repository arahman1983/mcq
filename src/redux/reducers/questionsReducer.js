const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ANSWERS":
      return [...state, action.answer];
    case "RESET_ANSWERS":
      return [...state, action.answer];
    default:
      return state;
  }
};

export default questionsReducer;
