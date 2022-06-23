import { CountdownAnimation } from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";

 
 

function App() {
  return (
    <div className="container">
      <h1>Pomodoro Clock</h1>
      <small>What is up with that</small>
      <SetPomodoro />
     <CountdownAnimation />
    </div>
  );
}

export default App;
