import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { getProfilePicture } from "../../Cookie";
import { signout } from "../SignOut";

export function ProfileButton() {
  const profilePicure = getProfilePicture();

  const handlePageChange = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} rounded={"full"} variant={"link"}>
          <Avatar size={"sm"} src={profilePicure} />
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
