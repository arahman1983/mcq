const questionsReducer = (state = [
  {
    qId: 1,
    question: "What is Egypt's Capital ?",
    choices: [
      {
        id: 1,
        title: "Alex",
      },
      {
        id: 2,
        title: "Cairo",
      },
      {
        id: 3,
        title: "Aswan",
      },
      {
        id: 4,
        title: "Mansoura",
      },
    ],
    answer: 2,
  },
  {
    qId: 2,
    question: "Where does Mohamed Salah play ?",
    choices: [
      {
        id: 1,
        title: "Al-Ahly",
      },
      {
        id: 2,
        title: "Real Madrid",
      },
      {
        id: 3,
        title: "Liverpool",
      },
      {
        id: 4,
        title: "Manchester United",
      },
    ],
    answer: 3,
  },
  {
    qId: 3,
    question: "What's the capital of Spain ?",
    choices: [
      {
        id: 1,
        title: "Madrid",
      },
      {
        id: 2,
        title: "London",
      },
      {
        id: 3,
        title: "Paris",
      },
      {
        id: 4,
        title: "Cairo",
      },
    ],
    answer: 1,
  },
  {
    qId: 4,
    question: "What's the cross platform for mobile apps development from these ?",
    choices: [
      {
        id: 1,
        title: "Android",
      },
      {
        id: 2,
        title: "React Native",
      },
      {
        id: 3,
        title: "Swift",
      },
      {
        id: 4,
        title: "Objective C",
      },
    ],
    answer: 2,
  },
  {
    qId: 5,
    question: "What's the tallest river in the world ?",
    choices: [
      {
        id: 1,
        title: "Nile River",
      },
      {
        id: 2,
        title: "Degla River",
      },
      {
        id: 3,
        title: "Mississippi River",
      },
      {
        id: 4,
        title: "Seine River",
      },
    ],
    answer: 1,
  }
], action) => {
  switch (action.type) {
    case "GET_RANDOM":
      return state;
    default:
      return state;
  }
};


export default questionsReducer;
