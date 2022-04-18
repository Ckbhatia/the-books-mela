import React from "react";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthContext";
import useAuthHook from "../Hooks/authHook";
import Spinner from "./Common/Spinner";

const Default = () => {
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const auth = useAuthHook();

  React.useEffect(() => {
    setIsAuthenticated(auth);
  }, [auth, setIsAuthenticated]);

  return (
    <StyledSpinnerContainer>
      <Spinner />
    </StyledSpinnerContainer>
  );
};

export default Default;

const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 76vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
