
import { useTimer } from './TimerContext';

const TimerDisplay = () => {
  const { seconds } = useTimer();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Elapsed Time:</h2>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default TimerDisplay;
