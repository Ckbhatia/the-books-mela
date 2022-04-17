import React from "react";

export const AuthContext = React.createContext<any>(null);

interface AuthContextProps {
  children: React.ReactNode;
  value: any;
}

export const AuthProvider: React.FC<AuthContextProps> = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
