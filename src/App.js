import './App.css';
import React from 'react';
import Countdown from './components/countdown/Countdown'; //importing countdown component
import { useWindowSize } from 'react-use'; //importing the useWindwoSize method from react use because of confetti
import Confetti from 'react-confetti'; //importing Confetti for page beautififcation.

//Using functional component with hooks
const App = () => {

  //setting width and height for confetti
  const { width, height } = useWindowSize()

  //jsx
  return (
    <div className="App">
      <header className="App-header">
        <h1>Eric Lee's Birthday! 🎉</h1>
        <small>...We are a place where we come together to solve our common problems with uncommon creativity</small>
        <Confetti 
          numberOfPieces={30}
          width={width}
          height={height}
          gravity={0.04}
        />
      </header>
      <div className="content">
        <Countdown />
      </div>
    </div>
  );
}

export default App;
