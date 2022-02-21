import { useState } from "react";
import Title from "../Title";
import Clock from "../Clock";
import Button from "../Button";

let stopwatchMs = 0;
let stopwatchSecond = 0;
let stopwatchMinute = 0;
let stopwatchHour = 0;

const Stopwatch = () => {
  const [time, setTime] = useState("00:00:00:00");
  const [text, setText] = useState("Start");
  const [timer, setTimer] = useState(null);

  const stopwatchRun = () => {
    stopwatchMs++;
    if (stopwatchMs / 100 === 1) {
      stopwatchMs = 0;
      stopwatchSecond++;
      if (stopwatchSecond / 60 === 1) {
        stopwatchSecond = 0;
        stopwatchMinute++;
        if (stopwatchMinute / 60 === 1) {
          stopwatchMinute = 0;
          stopwatchHour++;
        }
      }
    }
    const formattedMs = stopwatchMs.toString().padStart(2, "0");
    const formattedSecond = stopwatchSecond.toString().padStart(2, "0");
    const formattedMinute = stopwatchMinute.toString().padStart(2, "0");
    const formattedHour = stopwatchHour.toString().padStart(2, "0");

    setTime(
      `${formattedHour}:${formattedMinute}:${formattedSecond}:${formattedMs}`
    );
  };

  const startStop = () => {
    if (text === "Start") {
      const tempTimer = setInterval(stopwatchRun, 10);
      setTimer(tempTimer);
      setText("Stop");
    } else {
      clearInterval(timer);
      setText("Start");
    }
  };

  const reset = () => {
    clearInterval(timer);
    setTime(`00:00:00:00`);
    stopwatchMs = 0;
    stopwatchSecond = 0;
    stopwatchMinute = 0;
    stopwatchHour = 0;
    setText("Start");
  };
  return (
    <>
      <Title name="React Stopwatch" />
      <Clock time={time} />
      <div>
        <Button text={text} clicked={startStop} />
        <Button text="Reset" clicked={reset} />
      </div>
    </>
  );
};

export default Stopwatch;
