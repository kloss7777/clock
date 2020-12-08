import React, {useEffect, useState} from 'react';
import {Clock} from "./Clock";

const ANGLES_PER_SECOND = 6;

const ANGLES_PER_HOUR = 30;
const ANGLES_PER_MINUTE_FOR_HOURS = 0.5;

const ANGLES_PER_MINUTE = 6;
const ANGLES_PER_SECONDS_FOR_MINUTE = 0.1;

export const App = () => {
  const [angles, setAngles]  = useState([0,0,0]);
  
  useEffect(() => {
    console.log('use effect')
    const interval = setInterval(() => {
      const curTime = new Date();
      const seconds = curTime.getSeconds();
      const minutes = curTime.getMinutes();
      const milliseconds = curTime.getMilliseconds();
      
      let hours = curTime.getHours();
      if (hours>=12) {
        hours -= 12;
      }
      if (hours>=12) {
        hours -= 12;
      }
      console.log('clock!', hours, minutes, seconds, milliseconds);
      setAngles([
        hours*ANGLES_PER_HOUR + minutes*ANGLES_PER_MINUTE_FOR_HOURS,
        minutes*ANGLES_PER_MINUTE + seconds*ANGLES_PER_SECONDS_FOR_MINUTE,
        (seconds+milliseconds/1000)*ANGLES_PER_SECOND
      ]);
      
      
    }, 16);
    return () => clearInterval(interval);
  }, []);
  
  console.log(angles);
  
  return (
      <div>
        <p>{angles[0]} {angles[1]} {angles[2]}</p>
        <Clock angles={angles}/>
      </div>
  )
}
