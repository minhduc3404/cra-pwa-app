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
    console.log(
      "/* ------------------------------------ ˚ ----------------------------------- */"
    );
    console.log("mediaStream", mediaStream);
    console.log("videoRef.current", videoRef.current);
    console.log("videoRef.current.srcObject", videoRef.current.srcObject);
    const readyToPlay =
      mediaStream && videoRef.current && !videoRef.current.srcObject;
    console.log("readyToPlay", readyToPlay);
    //console.log('mediaStream', mediaStream)

    if (mediaStream && videoRef.current) {
      videoRef.current.srcObject = mediaStream;
      setMessage("Ready to play");
    } else {
      setMessage("Media stream not found");
    }

    // videoRef.current
    // if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    //   videoRef.current.srcObject = mediaStream;
    //   setMessage(`Meadia stream: `)
    // }else{
    //     setMessage("Media stream not found")
    // }
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
