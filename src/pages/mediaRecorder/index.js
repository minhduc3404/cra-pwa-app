import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Container,
  LinkPreview,
  RecordButton,
  RecordStateLabel,
  Surface,
  Video,
  VideoControl,
} from "./styled";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const MediaRecorderCapture = () => {
  const [mediaRecorder, setMediaRecorder] = useState({});
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef();
  const playerRef = useRef();

  //Initalize the MediaRecorder
  useEffect(() => {
    initializeMediaRecorder();
  }, []);

  useEffect(() => {
    let chunks = [];

    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

    mediaRecorder.onstop = (e) => {
      console.log("mediaRecorder.onstop");
      let blob = new Blob(chunks, { type: "video/mp4" });
      chunks = [];
      let url = (window.URL || window.webkitURL).createObjectURL(blob);
      setPlaybackPreview(url);
      createDownloadLink(url);
    };
    return () => {};
  }, [mediaRecorder.state]);

  //start record
  function startRecord() {
    if (mediaRecorder.state === "recording") return;
    mediaRecorder.start();
    setIsRecording(true);
  }

  //stop record
  async function stopRecord() {
    if (mediaRecorder.state === "inactive") return;
    mediaRecorder.stop();
    setIsRecording(false);
    await initializeMediaRecorder();
  }

  function setPlaybackPreview() {}

  function createDownloadLink(url) {
    const link = (
      <LinkPreview href={url} download="Recording.mp4">Preview</LinkPreview>
    );
    const linkContainer = document.getElementById("download-link");
    const root = createRoot(linkContainer);
    root.render(link);
  }

  function getMediaStream() {
    return new Promise(async (resolve, reject) => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: {
            facingMode: "user",
          },
        });

        console.log("Stream fetched");
        resolve(stream);
      } catch (error) {
        console.log("Error in fetching stream");
        reject(error);
      }
    });
  }

  function setRecordingStreamPreview(stream) {
    if (!recorderRef.current) return;
    try {
      recorderRef.current.srcObject = stream;
    } catch (e) {}
  }

  function createMediaRecorder(stream) {
    return new Promise((resolve, reject) => {
      try {
        console.log("Media stream ", stream);
        const mediaRecorder = new MediaRecorder(stream);
        console.log("New MediaRecorder created");
        resolve(mediaRecorder);
      } catch (error) {
        console.log("Erorr in create new MediaRecorder");
        reject(error);
      }
    });
  }

  async function initializeMediaRecorder() {
    return new Promise(async (resolve, reject) => {
      try {
        const stream = await getMediaStream();
        setRecordingStreamPreview(stream);
        const mediaRecorder = await createMediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
        resolve(mediaRecorder);
      } catch (error) {
        console.log(
          "Error in initializing MediaRecorder of fetching media devices stream"
        );
        reject(error);
      }
    });
  }

  return (
    <Container>
      <Video
        className="recorder"
        ref={recorderRef}
        autoPlay
        playsInline
        muted
      />

      <VideoControl>
        <RecordButton onClick={isRecording ? stopRecord : startRecord}>
          <RadioButtonCheckedIcon sx={{ fontSize: "80px", color: "red" }} />
        </RecordButton>
      </VideoControl>

      <RecordStateLabel active={!isRecording}>
        {isRecording ? "Đang ghi hinh " : "Tạm dừng..."}
      </RecordStateLabel>

      <Surface />
      <div id="download-link">Preview</div>
    </Container>
  );
};

export default MediaRecorderCapture;
