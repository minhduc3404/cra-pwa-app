import { useEffect, useRef, useState } from "react";
import { useStreamMedia } from "../../hooks/useMediaStream";

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
};

const Camera = () => {
  const videoRef = useRef();
  const mediaStream = useStreamMedia(CAPTURE_OPTIONS);
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = mediaStream;
      setMessage(`Meadia stream: ${mediaStream}`)
    }else{
        setMessage("Meadia stream not found")
    }
  }, [mediaStream]);

  function handleCanPlay() {
    videoRef.current.play();
    console.log("handleCanPlay");
  }

  return (
    <>
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
      />

      <p>{}`Message ${message}`</p>
    </>
  );
};

export default Camera;
