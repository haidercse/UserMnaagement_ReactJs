export const initialState = {
  users: [
    {
      id: 1,
      username: "anisul",
    },
    {
      id: 2,
      username: "Alsex",
    },
    {
      id: 3,
      username: "bladamir",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      const filterdUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filterdUsers,
      };

    default:
      return state;
  }
};
