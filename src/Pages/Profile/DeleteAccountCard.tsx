import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { getCookie } from "../../Fetch";
import { signout } from "../../Components/SignOut";
import { toast } from "react-toastify";

export function DeleteAccountCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleDelete = () => {
    axios
      .get(
        "https://collegy-server.herokuapp.com/user/delete-account/" +
          getCookie("visitorId=")
      )
      .then(() => {
        signout();
      })
      .catch((err) => {
        toast.error("Failed to delete account.");
        console.log(err);
      });
  };

  return (
    <>
      <Button colorScheme={"red"} onClick={onOpen}>
        Delete Your Account
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Your Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this termination afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
