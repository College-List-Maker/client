import { Button } from "@chakra-ui/react";
import { eraseCookie } from "../Cookie";

export function SignOut() {
  const signout = () => {
    new Promise((resolve, reject) => {
      window.localStorage.removeItem("user_info");
      eraseCookie("visitorId");
      resolve("finished erase");
    }).then(() => {
      window.location.assign("https://college-list-maker.github.io/client/#/");
    });
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Button onClick={() => signout()}>Sign Out</Button>
      <Button onClick={() => refresh()}>Refresh</Button>
    </>
  );
}
