export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, loggedUser: action.payload };

    default:
      throw new Error();
  }
};
