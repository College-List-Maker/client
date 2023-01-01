import { Button } from "@chakra-ui/react";
import { eraseCookie } from "../Cookie";

export const signout = () => {
  new Promise((resolve, reject) => {
    window.localStorage.removeItem("user_info");
    eraseCookie("visitorId");
    resolve("finished erase");
  }).then(() => {
    window.location.hash = "#";
    window.location.reload();
  });
};

export function SignOut() {
  return <Button onClick={() => signout()}>Sign Out</Button>;
}
