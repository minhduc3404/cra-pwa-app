import { useEffect } from "react";
import { toast } from "react-toastify";
import { StyledButton } from "./styles";

export const ShareButton = () => {
  const notify = (text) => toast(text);

  function handlerError(error) {
    notify(error);
  }

  function handlerSupportFunc() {
    toast({content: 'Hỗ trợ chức năng share'})
  }

  function share(text) {
    if (navigator.share === undefined) {
      handlerError("No support navigator share");
      return;
    }

    handlerSupportFunc();
  }

  return (
    <StyledButton onClick={() => share("I want to share this text")}>
      Share URL
    </StyledButton>
  );
};
