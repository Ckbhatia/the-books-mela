import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import { getIsAuthenticated } from "../utils/auth";

const useAuthHook = () => {
  const navigate = useNavigate();
  const isAuthenticated = getIsAuthenticated();

  React.useEffect(() => {
    if(isAuthenticated) {
      navigate(routes.search)
    } else {
      navigate(routes.homepage)
    }
  }, [navigate, isAuthenticated]);

  return isAuthenticated;
};

export default useAuthHook;