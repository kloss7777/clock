import React from 'react';
import {AnalogClock} from "./AnalogClock/AnalogClock";
import styled from "styled-components";

export const App = () => {
    return (
        <Center>
            <AnalogClock size={800} showDiff={false}/>
        </Center>
    )
}

const Center = styled.div`
  text-align: center;
`;
