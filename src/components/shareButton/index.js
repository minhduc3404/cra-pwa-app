import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StyledButton } from "./styles";

export const ShareButton = () => {
  const notify = (text) => toast(text);
  const [shareSupport, setShareSupport] = useState(null)

  function handlerError(error) {
    notify(error);
    setShareSupport(false)
  }

  function handlerSupportFunc() {
    toast({content: 'Hỗ trợ chức năng share'})
    setShareSupport(true)
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
      Share URL <div><b>{shareSupport === true ? 'Support':'' } {shareSupport === false ? 'Unsupport':'' }</b></div>
    </StyledButton>
  );
};
