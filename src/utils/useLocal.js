import { useEffect } from 'react';
import { useEmployees } from '../context/Context';

export default function useLocal() {
    const {  dispatch } = useEmployees();
    useEffect(() => {
        if (localStorage.getItem("loggedUser")) {
          const user = JSON.parse(localStorage.getItem("loggedUser"));
          dispatch({
            type: "login",
            payload: {
              ...user,
            },
          });
        }
      }, [dispatch]);
}
