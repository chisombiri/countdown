import './App.css';
import './style/Countdown.css';
import Countdown from './components/countdown/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown</h1>
      </header>
      <div className="content">
        <Countdown />,
      </div>
    </div>
  );
}

export default App;
