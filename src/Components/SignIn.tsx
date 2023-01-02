import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { continueGoogle } from "../redux/actions/auth";
import { useAppDispatch } from "../redux/const/hooks";
import { updateUserInfo } from "../Cookie";

export function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleGoogleLoginSuccess(tokenResponse: any) {
    const accessToken = tokenResponse.access_token;
    dispatch(continueGoogle(accessToken, navigate)).then(() => {
      new Promise((resolve, reject) => {
        updateUserInfo();
        resolve("finished update user info");
      }).then(() => {
        window.location.hash = "#";
        window.location.reload();
      });
    });
  }
  function handleGoogleError(err: any) {
    console.log(err);
  }
  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: handleGoogleError,
  });

  return (
    <>
      <Button onClick={() => login()}>Sign In/Up</Button>
    </>
  );
}
