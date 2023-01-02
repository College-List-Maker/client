import { Button } from "@chakra-ui/react";
import { eraseCookie, removeLocalStorage } from "../Fetch";

export const signout = () => {
  new Promise((resolve, reject) => {
    removeLocalStorage();
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
