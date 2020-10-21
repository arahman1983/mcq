const answersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ANSWERS":
      return [...state, action.answer];
    case "RESET_ANSWERS":
      return [];
    default:
      return state;
  }
};

export default answersReducer;
