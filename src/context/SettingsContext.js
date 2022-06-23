import React, { createContext, useState } from "react";

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  const startTimer = () => {
    setStartAnimate(true);
  };
  const pauseTimer = () => {
    setStartAnimate(false);
  };
  const stopTimer = () => {
    setStartAnimate(false);
  };
  const updateExecute = updatedSettings=>{
    setExecting(updatedSettings)
  }
  const setTimerTime = evalute =>{
    switch (evalute.active) {
      case "work":
        setPomodoro(evalute.work);
        break;
      case "shortBreak":
        setPomodoro(evalute.short);
        break;
      case "longBreak":
        setPomodoro(evalute.long);
        break;
      default:
        setPomodoro(0);
    }
  }

  return (
    <SettingContext.Provider value={{stopTimer, updateExecute}}>
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingsContextProvider;
