import { useCallback, useEffect, useState } from "react";

export function useStreamMedia(requestedMedia) {
  const [mediaStream, setMediaStream] = useState(null);

  const enableStream = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
      setMediaStream(stream);
    } catch (error) {
      // Removed
      console.error("useStreamMedia", error);
    }
  }, [requestedMedia]);

  useEffect(() => {
    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);
}
