import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
}
