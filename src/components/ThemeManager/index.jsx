import React, { useState, useEffect } from "react";
import { useApp } from "../../context/globalContext";

const ThemeManager = () => {
  const { setCurrentTheme, theme } = useApp();
  const [time, setTime] = useState();

  let hours;
  const currentTime = new Date();
  useEffect(() => {
    const currentTime = new Date();
    hours = currentTime.getHours();
    setTime(hours);
    if (hours >= 20 || hours <= 7) {
      setCurrentTheme("nigth");
    } else {
      setCurrentTheme("ligth");
    }
  }, []);

  return <div></div>;
};

export default ThemeManager;
