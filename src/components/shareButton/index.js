import { useEffect } from "react";
import { toast } from "react-toastify";
import { StyledButton } from "./styles";

export const ShareButton = () => {
  const notify = (text) => toast(text);

  function handlerUnsupport(text) {
    notify(text);
  }

  function share(text) {
    
    if (navigator.share === undefined) {
      handlerUnsupport(text);
      return;
    }

    console.log("has support navigator share")
  }


  return <StyledButton onClick={() => share('No support navigator share')}>Share URL</StyledButton>;
};
