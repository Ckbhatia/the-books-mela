import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import PublicRoutes from "./Components/PublicRoutes";
import { AuthProvider } from "./Context/AuthContext";
import { getIsAuthenticated } from "./utils/auth";
import { getUserInfo } from "./utils/storage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() =>
    getIsAuthenticated()
  );
  const [userInfo, setUserInfo] = React.useState(null);

  React.useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        const userInfo = await getUserInfo();
        if(userInfo?.id) {
          setUserInfo(userInfo);
        }
      })();
    }
  }, [isAuthenticated, setUserInfo]);

  return (
    <AuthProvider value={{ userInfo, isAuthenticated, setIsAuthenticated }}>
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
