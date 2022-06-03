import React from "react";
import { Container } from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { setGoogleAccessToken } from "features/auth";
import { NonValidSignInGoogleResponse, setSignInGoogleError } from "features/auth/auth-slice";

export const SignInGooglePage = () => {
  const dispatch = useDispatch();
  const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || "";

  const onSuccess = (response: any) => {
    if (response.accessToken) {
      dispatch(setGoogleAccessToken(response.accessToken));
    } else {
      dispatch(setSignInGoogleError(NonValidSignInGoogleResponse(response.code)));
    }
  };

  const onFailure = ({ error }: any) => {
    dispatch(setSignInGoogleError({ name: "sign-in-error", message: error }));
  };

  return (
    <Container data-testid="SignInGooglePage">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        scope="https://www.googleapis.com/auth/drive.readonly"
      />
    </Container>
  );
};
