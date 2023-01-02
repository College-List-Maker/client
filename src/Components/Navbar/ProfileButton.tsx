import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { getProfilePicture } from "../../Fetch";
import { signout } from "../SignOut";

export function ProfileButton() {
  const [profilePicture, setProfilePicture] = useState("");
  getProfilePicture().then((res) => setProfilePicture(res?.data));

  const handlePageChange = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} rounded={"full"} variant={"link"}>
          <Avatar size={"sm"} src={profilePicture || ""} />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <MenuItem onClick={() => handlePageChange("#college-list")}>
            College List
          </MenuItem>
          <MenuItem onClick={() => handlePageChange("profile")}>
            Profile
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={signout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
