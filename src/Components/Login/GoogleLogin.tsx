import React, { ReactElement } from "react";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { routes } from "../../constants/routes";
import { USER_INFO_TEXT } from "../../constants";

interface Props {
  redirect: (path: string) => void;
}

const Google: React.FC<Props> = ({ redirect }): ReactElement | null => {
  const [GOOGLE_CLIENT_ID, setGoogleClientId] = React.useState<
    null | undefined | string
  >(null);

  React.useEffect(() => {
    if (!GOOGLE_CLIENT_ID) {
      setGoogleClientId(process.env.REACT_APP_GOOGLE_CLIENT_ID);
    }
  }, [GOOGLE_CLIENT_ID]);

  const responseGoogle = (response: any) => {
    const token = response?.accessToken;
    const id = response?.profileObj?.googleId;

    if (token) {
      localStorage.setItem(USER_INFO_TEXT, JSON.stringify({ token, id }));
      redirect(routes.search);
    }
  };

  const handleFailure = (response: any) => {
    console.error("error", response.error);
  };

  if (GOOGLE_CLIENT_ID !== null && GOOGLE_CLIENT_ID !== undefined) {
    return (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={handleFailure}
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
          <StyledSocialIconContainer
            onClick={() => {
              renderProps.onClick();
            }}
          >
            <FcGoogle />
          </StyledSocialIconContainer>
        )}
      />
    );
  }

  return null;
};

export default Google;

const StyledSocialIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 4px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    height: 28px;
    width: 28px;
  }
`;
