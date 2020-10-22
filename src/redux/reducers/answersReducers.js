const answersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ANSWERS":
      return [...state, action.answer];
    case "RESET_ANSWERS":
      return [];
    case "CALC_RESULT":
      return state.filter(answer => Number(answer.answer) === Number(answer.choice)).reduce((a, b) => a + b, 0)
    default:
      return state;
  }
};

export default answersReducer;
