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

  async function share(text) {
    if (navigator.share === undefined) {
      handlerError("No support navigator share");
      return;
    }
    setShareSupport(true)
    try{
        await navigator.share({text})
    }catch(error){
        handlerError(error)
    }
  }

  return (
    <StyledButton onClick={() => share("I want to share this text")}>
      Share URL <div><b>{shareSupport === true ? 'Support':'' } {shareSupport === false ? 'Unsupport':'' }</b></div>
    </StyledButton>
  );
};
