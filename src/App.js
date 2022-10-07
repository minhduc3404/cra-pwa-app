import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.svg';
import './App.css';
import { ShareButton } from './components/shareButton';
import { ToastContainer } from 'react-toastify';

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ass
        </a>

        <ShareButton />

        <ToastContainer />
      </header>

      
    </div>
  );
}

export default App;
