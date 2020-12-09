import React from 'react';
import {AnalogClock} from "./components/AnalogClock/AnalogClock";
import styled from "styled-components";
import {useWindowSize} from "./hooks/useWindowSize";

export const App = () => {
    const windowSize = useWindowSize();
    
    const size = Math.min(...windowSize) - 30;
    
    return (
        <Center>
            <AnalogClock size={size} showDiff={false}/>
        </Center>
    )
}

const Center = styled.div`
  text-align: center;
`;
