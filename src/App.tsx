import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import PublicRoutes from "./Components/PublicRoutes";
import { AuthProvider } from "./Context/AuthContext";
import { getIsAuthenticated } from "./utils/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() =>
    getIsAuthenticated()
  );

  return (
    <AuthProvider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated ? (
        <>
          <Header />
          <ProtectedRoutes />
        </>
      ) : (
        <PublicRoutes />
      )}
    </AuthProvider>
  );
}

export default App;
