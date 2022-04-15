import React, { useState, useEffect } from "react";
export default function OnlineTime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function parseDate(date) {
    let convertedDate;
    if (date !== undefined) {
      let newDate = new Date(date); // "2020-12-31"
      let hours = newDate.getHours();
      let minutes = newDate.getMinutes();
      let seconds = newDate.getSeconds();
      convertedDate = hours + ":" + minutes + ":" + seconds;
    }
    return convertedDate;
  }
  let today = parseDate(new Date());

  return <div>Серверное время: {today}</div>;
}
