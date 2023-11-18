
import { useTimer } from './TimerContext';

const TimerControls = () => {
  const { isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h2>Controls:</h2>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default TimerControls;
