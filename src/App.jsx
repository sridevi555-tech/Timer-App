import { TimerProvider } from "./Components/TimerContext";
import TimerControls from "./Components/TimerController";
import TimerDisplay from "./Components/TimerDisplay";



const App = () => {
  return (
    <TimerProvider>
      <div>
        <h1>React Timer App</h1>
        <TimerDisplay />
        <TimerControls />
      </div>
    </TimerProvider>
  );
};

export default App;
