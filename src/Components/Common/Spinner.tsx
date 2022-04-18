import styled from "styled-components";
import { ImSpinner2 } from "react-icons/im";

const Spinner = () => {
  return (
    <StyledSpinner>
      <ImSpinner2 />
    </StyledSpinner>
  );
};

export default Spinner;

const StyledSpinner = styled.div`
  svg {
    font-size: 40px;
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
