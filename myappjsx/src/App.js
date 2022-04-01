import React from 'react';
import './App.css';
import mycar from "./imgInSrc.jpg";
import './style.css';

function App() {
  return (
    <div className="App">
      <div className='red' style ={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 className='title'>Heni Chafai</h1>
        <br/>
        <img className="overlay" src={mycar} alt='myImage'/>
        <br/>
        <img src='/imgInPublic.jpg' alt='myimg' />
      </div>
      <div>
      <video width="320" height="240" controls>
       <source src='/myVideo.mp4' type='video/mp4'/>
      </video>
      </div>
    </div>
  );
}

export default App;
