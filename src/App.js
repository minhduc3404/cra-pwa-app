import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.svg";
import "./App.css";
import { ShareButton } from "./components/shareButton";
import { ToastContainer } from "react-toastify";
// import Camera from "./views/camera";
import MediaRecorder from "./pages/mediaRecorder";
import MediaRecorderCapture from "./pages/mediaRecorder";

function App() {
  // useEffect(() => {
  //   console.log('allow share')
  //   let url = document.location.href;
  //   const canonicalElement = document.querySelector('link[rel=canonical]');
  //   if (canonicalElement !== null) {
  //       url = canonicalElement.href;
  //   }

  //   navigator.share({
  //     title: 'Codica',
  //     text: 'Codica',
  //     url
  //   })
  //     .then(() => console.log('Successful share'))
  //     .catch((error) => console.log('Error sharing', error));
  // }, [])

  new Blob()

  return (
    <div className="App">
      <header className="App-header">

        <ShareButton />

        <ToastContainer />

        {/* <Camera /> */}
        <MediaRecorderCapture />
      </header>
    </div>
  );
}

export default App;
