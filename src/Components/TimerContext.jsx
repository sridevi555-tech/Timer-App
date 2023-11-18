
import { createContext, useContext, useState, useEffect } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider value={{ seconds, isRunning, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};

export { TimerProvider, useTimer };
