import { useEffect, useRef, useState } from "react";
import { useStreamMedia } from "../../hooks/useMediaStream";

const CAPTURE_OPTIONS = {
  audio: false,
  video: {
    facingMode: "user",
  },
};

const Camera = () => {
  const videoRef = useRef();
  const mediaStream = useStreamMedia(CAPTURE_OPTIONS);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const readyToPlay = mediaStream && videoRef.current && !videoRef.current.srcObject;

    if (readyToPlay) {
      videoRef.current.srcObject = mediaStream;
      setMessage("Ready to play");
    } else {
      setMessage("Media stream not found");
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

      <p>{`${message}`}</p>
    </>
  );
};

export default Camera;
