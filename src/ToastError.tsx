import { useToast } from "@chakra-ui/react";

const ToastError = (error: any, display: boolean) => {
  const toast = useToast();
  return toast({
    title: display ? error.message : "Oops! Something went wrong.",
    position: "top",
    status: "error",
    isClosable: true,
  });
};

export default ToastError;
