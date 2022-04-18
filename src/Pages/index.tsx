import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GoogleLogin from "../Components/Login/GoogleLogin";

const Index = () => {
  const navigate = useNavigate();

  const redirect = (path: string): void => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <StyledMain>
      <StyledHeadingContainer>
        <h1>The books mela</h1>
      </StyledHeadingContainer>
      <StyledSocialLoginContainer>
        <span>Login with</span>
        <GoogleLogin redirect={redirect} />
      </StyledSocialLoginContainer>
    </StyledMain>
  );
};

export default Index;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const StyledHeadingContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;

const StyledSocialLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  span {
    font-size: 1rem;
    font-weight: 700;
  }
`;
