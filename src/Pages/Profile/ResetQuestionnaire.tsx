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
import {
  getCookie,
  isQuestionaireCompleted,
  updateUserInfo,
} from "../../Fetch";
import { toast } from "react-toastify";

export function ResetQuestionnaire() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleReset = () => {
    axios
      .get(
        "https://collegy-server.herokuapp.com/user/delete-questionnaire/" +
          getCookie("visitorId=")
      )
      .then(() => {
        updateUserInfo().then(() => {
          toast.success("Your questionnaire has been reset!");
        });
      })
      .catch((err) => {
        toast.error("Failed to reset questionnaire.");
        console.log(err);
      });
  };

  return (
    <>
      <Button colorScheme={"red"} onClick={onOpen}>
        Reset Your Questionnaire
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Reset Your Questionnaire
            </AlertDialogHeader>

            <AlertDialogBody>
              {isQuestionaireCompleted()
                ? "Are you sure? You can't undo this termination afterwards."
                : "You don't have a form to reset yet."}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                onClick={handleReset}
                ml={3}
                isDisabled={!isQuestionaireCompleted()}
              >
                Reset
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
