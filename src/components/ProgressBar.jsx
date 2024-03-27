import { useState, useEffect } from "react";

const ProgressBar = ({ max }) => {
  const [remainingTime, setRemaingTime] = useState(0);

  useEffect(() => {
    const remainingTimeInterval = setInterval(() => {
      setRemaingTime((prevValue) => {
        return prevValue + 10;
      });
    }, 10);
    return () => {
      clearInterval(remainingTimeInterval);
    };
  }, []);

  return <progress value={remainingTime} max={max} />;
};

export default ProgressBar;
