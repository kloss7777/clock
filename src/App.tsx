import React from 'react';
import {AnalogClock} from "./components/AnalogClock/AnalogClock";
import styled from "styled-components";

export const App = () => {
    return (
        <Center>
            <AnalogClock size={800} showDiff={true}/>
        </Center>
    )
}

const Center = styled.div`
  text-align: center;
`;
