import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { AuthProvider } from "../Context/AuthContext";
import { getIsAuthenticated } from "./auth";

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const Wrapper: React.FC<{ children: any }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(() =>
      getIsAuthenticated()
    );

    return (
      <BrowserRouter>
        <AuthProvider value={{ isAuthenticated, setIsAuthenticated }}>
          {children}
        </AuthProvider>
      </BrowserRouter>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
