import React from 'react';
import unlock from './imagenes/undraw_unlock_24mb.svg';
import './App.css';

function App() {
  return (
    <div className="container flex flex-col mx-auto mt-10 App">
      <img src={unlock} alt="lock" className="App_unlock_svg" />
    </div>
  );
}

export default App;
