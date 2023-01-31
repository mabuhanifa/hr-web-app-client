import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
const initialState = {
  loggedUser: {},
  employees: [],
};

const Provider = createContext();

export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };
  return <Provider.Provider value={store}>{children}</Provider.Provider>;
}

export const useEmployees = () => {
  return useContext(Provider);
};
