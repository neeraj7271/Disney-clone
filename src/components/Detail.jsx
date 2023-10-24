import React from "react";
import styled from "styled-components";

function Detail() {
    return (    
        <Container>
            <Background>
                <img src="/images/detail-background.jpg" alt="" />
            </Background>
            <ImageTitle>
                <img src="/images/imageLogo.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />            
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />            
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 * 7m * Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures. The artist John Tenniel provided 42 wood-engraved illustrations for the book.
            </Description>
        </Container>
    )
}


export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${'' /* z index is done -1 as to show the header */}
    z-index: -1;
    opacity: 0.8;

    img{
    height: 100%;
    width: 100%;
    background-size: cover;
    object-fit: cover;
    background-position: center center;
    padding-top: 40px;
    }
`;

const ImageTitle = styled.div`
    height: 15vh;
    min-height: 140px;
    width: 20vw;
    min-width: 170px;
    margin-top: 20px;
    
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 38px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 12px;
    margin-right: 10px;
    letter-spacing: 1.8px;
    cursor: pointer;

    img{
        height: 25px;
    }

    &:hover{
        background: rgb(198, 198, 198);
    }

`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(249, 249, 249);
    text-transform: uppercase;
`;

const AddButton = styled.button`
    margin-right: 10px;
    border: 2px solid white;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    cursor: pointer;
    
    span{
        font-size:27px;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);

    img{
        height: 27px;
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 13px;
    min-height: 20px;
    margin-top: 13px;
`

const Description = styled.div`
    line-height: 1.3;
    font-size: 16px;
    margin-top: 10px;
    color: rgb(249, 249, 249);
`;