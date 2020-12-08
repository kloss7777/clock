import React from 'react';

interface ClockProps {
    angles: number[];
}

const WIDTH = 630;
const HEIGHT = 630;

const POINT_COLOR = "#222222";

const ANGLE_PER_HOUR = 30;

const SECONDS_HAND_LENGTH = 300;
const MINUTES_HAND_LENGTH = 300;
const HOURS_HAND_LENGTH = 200;

const degToRad = (degrees:number) => {
    return degrees * (Math.PI/180);
}

export const Clock = (props: ClockProps) => {
    const clock_center_x = WIDTH / 2;
    const clock_center_y = HEIGHT / 2;
    
    const seconds_hand_x = clock_center_x + Math.sin(degToRad(180-props.angles[2])) * SECONDS_HAND_LENGTH;
    const seconds_hand_y = clock_center_y + Math.cos(degToRad(180-props.angles[2])) * SECONDS_HAND_LENGTH;
    
    const minutes_hand_x = clock_center_x + Math.sin(degToRad(180-props.angles[1])) * MINUTES_HAND_LENGTH;
    const minutes_hand_y = clock_center_y + Math.cos(degToRad(180-props.angles[1])) * MINUTES_HAND_LENGTH;
    
    const hours_hand_x = clock_center_x + Math.sin(degToRad(180-props.angles[0])) * HOURS_HAND_LENGTH;
    const hours_hand_y = clock_center_y + Math.cos(degToRad(180-props.angles[0])) * HOURS_HAND_LENGTH;

    return (
        <svg width={WIDTH} height={HEIGHT}>
            {[0,1,2,3,4,5,6,7,8,9,10,11].map((hour) => {
                const x = clock_center_x + Math.sin(degToRad(hour*ANGLE_PER_HOUR)) * 300;
                const y = clock_center_y + Math.cos(degToRad(hour*ANGLE_PER_HOUR)) * 300;
                const radius = ((hour % 3) === 0) ? 11 : 5;
                return (
                    <circle cx={x} cy={y} r={radius} fill={POINT_COLOR}/>
                );
            })}
            <line
                x1={clock_center_x}
                y1={clock_center_y}
                x2={hours_hand_x}
                y2={hours_hand_y}
                stroke="blue"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <line
                x1={clock_center_x}
                y1={clock_center_y}
                x2={minutes_hand_x}
                y2={minutes_hand_y}
                stroke="blue"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <line
                x1={clock_center_x}
                y1={clock_center_y}
                x2={seconds_hand_x}
                y2={seconds_hand_y}
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
            />
        
        
        </svg>
    )
}
