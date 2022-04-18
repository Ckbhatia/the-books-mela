import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../constants/routes";
import { AuthContext } from "../Context/AuthContext";
import { logOut } from "../utils/auth";

const Header = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = React.useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
    await setIsAuthenticated(false);
    navigate(routes.homepage)
  }
  return (
    <StyledHeader>
      <div>
        <StyledHeading>The books mela</StyledHeading>
      </div>
      <nav>
        <StyledLogOutButton onClick={handleLogOut}>Log out</StyledLogOutButton>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
max-width: 1150px;
width: 100%;
margin: 0 auto;
padding 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeading = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #606060;
  text-transform: uppercase;
`;
const StyledLogOutButton = styled.button`
  width: 100px;
  height: 32px;
  font-size: 15px;
  font-weight: 500;
  color: #353535;
  border: none;
  background-color: whitesmoke;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
