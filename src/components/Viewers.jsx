import React from "react";
import styled from "styled-components";

function Viewers() {
    return(
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt=""/>
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 25px;
    padding: 30px 0 26px;
   
    
`;

const Wrap = styled.div`

    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    ${'' /* learn this 250ms time for transitions it's very important and use frequently by many developers */}
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    ${'' /* the just below line concatinate the hover with the parent container ie. Wrap */}
    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`;