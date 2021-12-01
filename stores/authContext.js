import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children, userBeta }) => {
  const [user, setUser] = useState("null eeeeh");

  useEffect(() => {
    //   Initialize
    setUser(userBeta);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthContext;
