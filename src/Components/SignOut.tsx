import { Button } from "@chakra-ui/react";
import { eraseCookie } from "../Cookie";

export function SignOut() {
  const signout = () => {
    window.localStorage.removeItem("user_info");
    eraseCookie("visitorId");
    window.location.hash = "";
    window.location.reload();
  };

  return <Button onClick={() => signout()}>Sign Out</Button>;
}
