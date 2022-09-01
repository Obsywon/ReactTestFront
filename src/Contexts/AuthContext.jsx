import { createContext, useState, useEffect } from "react";
import { logoutAccount } from "../Utilities/accounts";
import useRefreshAuth from "../Hooks/useRefreshAuth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const refresh = useRefreshAuth();

  const [auth, setAuth] = useState(false);


  useEffect(() => {
    const grabToken = async () =>{
      try{
        const response = await refresh();
        setAuth(response)
      } catch (err) {
        console.log(err)
      }
    }
    grabToken()
  }, []);

  const logOutUser = async () => {
    const response = logoutAccount();
    response
      .then(() => {
        setAuth({});
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(()=>window.location.reload())
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
