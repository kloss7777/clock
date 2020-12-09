import React from 'react';
import {ANGLES_PER_HOUR} from "./common";

interface ClockFaceProps {
    size: number;
    angles: number[];
}

const DOT_COLOR = "#333333";
const HOURS_HAND_COLOR = "#011da5";
const MINUTES_HAND_COLOR = "#1735c9";
const SECONDS_HAND_COLOR = "#c90000";

const degToRad = (degrees:number) => {
    return degrees * (Math.PI/180);
}

export const ClockFace = (props: ClockFaceProps) => {
    const SECONDS_HAND_LENGTH = props.size / 2;
    const MINUTES_HAND_LENGTH = (props.size / 2)*0.9;
    const HOURS_HAND_LENGTH = MINUTES_HAND_LENGTH / 1.5;
    
    const BIG_DOT_SIZE = props.size / 60;
    const SMALL_DOT_SIZE = BIG_DOT_SIZE / 2;
    
    const clock_center_x = props.size / 2;
    const clock_center_y = props.size / 2;
    
    const seconds_hand_x = clock_center_x + Math.sin(degToRad(180-props.angles[2])) * SECONDS_HAND_LENGTH;
    const seconds_hand_y = clock_center_y + Math.cos(degToRad(180-props.angles[2])) * SECONDS_HAND_LENGTH;
    
    const seconds_hand_x2 = clock_center_x + Math.sin(degToRad(360-props.angles[2])) * SECONDS_HAND_LENGTH * 0.1;
    const seconds_hand_y2 = clock_center_y + Math.cos(degToRad(360-props.angles[2])) * SECONDS_HAND_LENGTH * 0.1;
    
    const minutes_hand_x = clock_center_x + Math.sin(degToRad(180-props.angles[1])) * MINUTES_HAND_LENGTH;
    const minutes_hand_y = clock_center_y + Math.cos(degToRad(180-props.angles[1])) * MINUTES_HAND_LENGTH;
    
    const minutes_hand_x2 = clock_center_x + Math.sin(degToRad(360-props.angles[1])) * MINUTES_HAND_LENGTH*0.1;
    const minutes_hand_y2 = clock_center_y + Math.cos(degToRad(360-props.angles[1])) * MINUTES_HAND_LENGTH*0.1;
    
    const hours_hand_x = clock_center_x + Math.sin(degToRad(180-props.angles[0])) * HOURS_HAND_LENGTH;
    const hours_hand_y = clock_center_y + Math.cos(degToRad(180-props.angles[0])) * HOURS_HAND_LENGTH;
    
    const hours_hand_x2 = clock_center_x + Math.sin(degToRad(360-props.angles[0])) * HOURS_HAND_LENGTH*0.1;
    const hours_hand_y2 = clock_center_y + Math.cos(degToRad(360-props.angles[0])) * HOURS_HAND_LENGTH*0.1;
    
    return (
        <svg width={props.size} height={props.size}>
            {[0,1,2,3,4,5,6,7,8,9,10,11].map((hour) => {
                const x = clock_center_x + Math.sin(degToRad(hour*ANGLES_PER_HOUR)) * (clock_center_x - BIG_DOT_SIZE);
                const y = clock_center_y + Math.cos(degToRad(hour*ANGLES_PER_HOUR)) * (clock_center_y - BIG_DOT_SIZE);
                const radius = ((hour % 3) === 0) ? BIG_DOT_SIZE : SMALL_DOT_SIZE;
                return (
                    <circle key={hour} cx={x} cy={y} r={radius} fill={DOT_COLOR}/>
                );
            })}
            <line
                x1={hours_hand_x}
                y1={hours_hand_y}
                x2={hours_hand_x2}
                y2={hours_hand_y2}
                stroke={HOURS_HAND_COLOR}
                strokeWidth="20"
                strokeLinecap="round"
            />
            <line
                x1={minutes_hand_x}
                y1={minutes_hand_y}
                x2={minutes_hand_x2}
                y2={minutes_hand_y2}
                stroke={MINUTES_HAND_COLOR}
                strokeWidth="20"
                strokeLinecap="round"
            />
            <line
                x1={seconds_hand_x}
                y1={seconds_hand_y}
                x2={seconds_hand_x2}
                y2={seconds_hand_y2}
                stroke={SECONDS_HAND_COLOR}
                strokeWidth="5"
                strokeLinecap="round"
            />
            <circle
                cx={clock_center_x}
                cy={clock_center_y}
                r={10}
                fill={SECONDS_HAND_COLOR}
            />
        </svg>
    )
}
