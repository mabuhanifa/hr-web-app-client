export const reducer = (state, action) => {
  console.log(state.loggedUser);
  switch (action.type) {
    
    case "login":
      return { ...state, loggedUser: action.payload };

    default:
      throw new Error();
  }
};
