import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { continueGoogle } from "../redux/actions/auth";
import { useAppDispatch } from "../redux/const/hooks";

export function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleGoogleLoginSuccess(tokenResponse: any) {
    const accessToken = tokenResponse.access_token;
    dispatch(continueGoogle(accessToken, navigate));
    window.location.hash = "";
  }
  function handleGoogleError(err: any) {
    console.log(err);
  }
  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: handleGoogleError,
  });

  return <Button onClick={() => login()}>Continue with google</Button>;
}
