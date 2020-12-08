import React, {useEffect, useState} from 'react';
import {ClockFace} from "./ClockFace";
import {
  ANGLES_PER_HOUR,
  ANGLES_PER_MINUTE, ANGLES_PER_MINUTE_FOR_HOURS,
  ANGLES_PER_SECOND,
  ANGLES_PER_SECOND_FOR_HOURS,
  ANGLES_PER_SECONDS_FOR_MINUTE
} from "./common";

interface AnalogClockProps {
  size: number;
  showDiff?: boolean;
}

const calculateAnglesForCurrentTime = () => {
  const curTime = new Date();
  const seconds = curTime.getSeconds();
  const minutes = curTime.getMinutes();
  const milliseconds = curTime.getMilliseconds();
  
  let hours = curTime.getHours();
  while (hours>=12) {
    hours -= 12;
  }
  
  return [
    hours*ANGLES_PER_HOUR + minutes*ANGLES_PER_MINUTE_FOR_HOURS + seconds*ANGLES_PER_SECOND_FOR_HOURS,
    minutes*ANGLES_PER_MINUTE + seconds*ANGLES_PER_SECONDS_FOR_MINUTE,
    (seconds+milliseconds/1000)*ANGLES_PER_SECOND
  ];
}

export const AnalogClock = (props: AnalogClockProps) => {
  const [angles, setAngles]  = useState([...calculateAnglesForCurrentTime()]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAngles([...calculateAnglesForCurrentTime()]);
    }, 16);
    return () => clearInterval(interval);
  }, []);
  
  let diff = Math.abs(angles[0]-angles[1]);
  if (diff>180) { diff = 360-diff; }
  
  return (
      <div>
        <ClockFace angles={angles} size={props.size}/>
        {props.showDiff && (<p>Angle between blue clock hands: {Math.round(diff)}</p>)}
      </div>
  )
}
